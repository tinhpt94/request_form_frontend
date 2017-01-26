/**
 * Created by thangkc on 14/12/2015.
 */
import React from "react";
import request from "reqwest";
import when from "when";
import LoginAction from "../actions/LoginAction.jsx";
import LoginConstant from "../constants/LoginConstant.jsx";


class LoginService {
    login(userName, password) {
        when(request({
            url: LoginConstant.URL,
            method: 'POST',
            crossOrigin: true,
            headers: {
                'Csrf-Token': "nocheck"
            },
            type: 'json',
            data: {
                accountId: userName,
                password: password
            }
        })).then(function (response) {
            switch (response.code) {
                case 200:
                    LoginAction.loginUser({
                        userId: response.data.userId,
                        userName: response.data.userName
                    });
                    break;
                case 401:
                    LoginAction.loginUser({});
                    break;
                case 400:
                    LoginAction.error(response.error);
                    break;
                default :
                    break;
            }
        })
    }

    logout() {
        when(request({
            url: LoginConstant.URL,
            method: 'DELETE',
            crossOrigin: true,
            headers: {
                'Csrf-Token': "nocheck"
            },
            type: 'json'
        })).then(function (response) {
            switch (response.code) {
                case 200:
                    LoginAction.logout();
                    break;
                default :
                    break;
            }
        })
    }

    isAuthenticated() {
        when(request({
            url: LoginConstant.URL,
            method: 'GET',
            crossOrigin: true,
            headers: {
                'Csrf-Token': "nocheck"
            },
            type: 'json'
        })).then(function (response) {
            switch (response.code) {
                case 200:
                    LoginAction.loginUser(response.data[0]);
                    break;
                case 401:
                    LoginAction.logout();
                    break;
                default :
                    break;
            }
        })
    }
}

export default new LoginService()