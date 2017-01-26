/**
 * Created by thangkc on 14/12/2015.
 */
import React from 'react';
import {Router, Link} from 'react-router'
import LoginStore from '../../stores/LoginStore.jsx'
import LoginService from '../../services/LoginService.jsx'

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
    }

    _getState() {
        return {
            userLoggedIn: LoginStore.loggedInUser(),
            route: window.location.pathname
        };
    }

    _onChange() {
        this.setState(this._getState());
    }

    componentDidMount() {
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div id="main">
                <div id="header">
                    <div className="container">
                        <div className="container-fluid">
                            <h1 className="pull-left" id="logo">
                                <Link to="/">SepTech Request Form</Link>
                            </h1>
                            { this.headerItems }
                        </div>
                    </div>
                    {this.navBar}
                </div>
                <div className="container" id="contents">
                    {this.props.children}
                </div>
            </div>
    )}

    get headerItems() {
        if (this.state.userLoggedIn) {
            return (
                <div className="pull-right" id="top-right">
                    <p className="user">
                        <span className="user-name">
                            <b className="ng-binding">{this.state.userLoggedIn.name}</b>
                        </span>
                        <button className="logout text-danger" type="button" onClick={this.logout.bind(this)}><i className="fa fa-power-off" /></button>
                    </p>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    get navBar() {
        if(this.state.userLoggedIn){
            return (
                <div className="navbar">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li className={this.state.route == "/user" ? 'active' : ""}>
                                <Link to="/user">User List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        } else
            return (
                <div></div>
            )
    }

    logout(e) {
        e.preventDefault();
        LoginService.logout();
    }
}
