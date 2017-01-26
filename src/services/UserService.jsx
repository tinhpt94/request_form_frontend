/**
 * Created by thangkc on 14/12/2015.
 */
import React from "react";
import request from "reqwest";
import when from "when";
import LoginAction from "../actions/LoginAction.jsx";
import UserAction from "../actions/UserAction.jsx";
import UserConstant from "../constants/UserConstant.jsx";


class UserService {
    list(status) {
        when(request({
            url: UserConstant.URL,
            method: 'GET',
            crossOrigin: true,
            headers: {
                'Csrf-Token': "nocheck"
            },
            type: 'json'
        })).then(function (response) {
            switch (response.code) {
                case 200:
                    UserAction.list(response.data, status);
                    break;
                case 401:
                    LoginAction.loginUser({});
                    break;
                case 400:
                    break;
                default :
                    break;
            }
        })
    }
}

export default new UserService()