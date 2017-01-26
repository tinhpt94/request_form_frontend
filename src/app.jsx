import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link} from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import Main from "./components/main/MainComponent.jsx";
import LoginComponent from "./components/main/LoginComponent.jsx";
import UserListComponent from "./components/user/UserListComponent.jsx";
import NotFoundComponent from "./components/common/NotFoundComponent.jsx";

let history = createBrowserHistory();

var routes = (
    <Route path="/"              component={Main}>
        <IndexRoute              component={LoginComponent}/>
        <Route path="user"       component={UserListComponent}/>
        <Route path="login"      component={LoginComponent}/>
        <Route path="*"          component={NotFoundComponent}/>
    </Route>
);


ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('body'));