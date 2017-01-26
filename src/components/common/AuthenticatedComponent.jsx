/**
 * Created by thangkc on 14/12/2015.
 */
import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router'
import LoginStore from '../../stores/LoginStore.jsx'
import LoginService from '../../services/LoginService.jsx'
import LoginComponent from '../main/LoginComponent.jsx'

export default (ComposedComponent) => {
    return class AuthenticatedComponent extends React.Component {

        checkAuthen() {
            LoginService.isAuthenticated();
        }

        constructor() {
            super();
            this.state = this._getState();
            this._onChange = this._onChange.bind(this);
        }

        _getState() {
            return {
                userLoggedIn: LoginStore.loggedInUser()
            };
        }

        componentDidMount() {
            this.checkAuthen();
            LoginStore.addChangeListener(this._onChange);
        }

        componentWillUnmount() {
           LoginStore.removeChangeListener(this._onChange);
        }

        componentDidUpdate() {
            if(!this.state.userLoggedIn){
                this.props.history.pushState(null, '/login');
            }
        }

        render() {
            if(this.state.userLoggedIn)
            return (
                <ComposedComponent
                    {...this.props}
                    userLoggedIn={this.state.userLoggedIn}
                />
            );
            else
                return (
                    <div>Check authen! Loading...</div>
                );
        }

        _onChange() {
            this.setState(this._getState());
        }
    }
}