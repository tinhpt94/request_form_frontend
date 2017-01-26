/**
 * Created by thangkc on 14/12/2015.
 */
import React from 'react';
import ReactLinkedStateMixin from 'react-addons-linked-state-mixin';
import ReactMixin from 'react-mixin';
import LoginService from '../../services/LoginService.jsx'
import LoginStore from '../../stores/LoginStore.jsx'
export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state =  this._getState();
        this._onChange = this._onChange.bind(this);
    }

    _getState() {
        return {
            userLoggedIn: LoginStore.loggedInUser(),
            errors: LoginStore.LoginError()
        };
    }

    componentDidMount() {
        if(this.state.userLoggedIn){
            this.props.history.pushState(null, '/user');
        }else{
            LoginService.isAuthenticated();
        }
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    }

    componentDidUpdate() {
        if(LoginStore.loggedInUser()){
            console.log("componentWillUpdate");
            this.props.history.pushState(null, '/user');
        }
    }

    _onChange() {
        this.setState(this._getState());
    }

    render() {
        return (
            <div className="login-frm">
                <div className="flat-form">
                    <h2>Login</h2>
                    <div className="form-action show" id="login">
                        <form onSubmit={this.handleLoginClick.bind(this)}>
                            {this.errorMessage}
                            <ul className="list-unstyled">
                                <li>
                                    <input type="text" placeholder="Login ID" className="form-control"  valueLink={this.linkState('name')}/>
                                </li>
                                <li>
                                    <input type="password" placeholder="Password" className="form-control" valueLink={this.linkState('password')}/>
                                </li>
                            </ul>
                            <p className="text-center">
                                <button className="btn btn-info btn-raised btn-lg" type="submit">Login</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    get errorMessage() {
        if(this.state.errors){
            return(
                <div className="text-danger form-group error">
                    Login false! Plz check your password or ID.
                </div>
            )
        }
    }

    handleLoginClick(e) {
        e.preventDefault();
        LoginService.login(this.state.name, this.state.password)
    }
}

ReactMixin(LoginComponent.prototype, ReactLinkedStateMixin);
