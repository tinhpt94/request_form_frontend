/**
 * Created by thangkc on 08/12/2015.
 */
import Dispatcher from '../dispatcher/Dispatcher.jsx'
import LoginConstant from '../constants/LoginConstant.jsx'
export default  {
    loginUser: (user) => {
        var savedUser = localStorage.getItem('user');
        Dispatcher.dispatch({
            actionType: LoginConstant.LOGIN_USER,
            user: user
        });

        if (savedUser !== user) {
            localStorage.setItem('user', user);
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        Dispatcher.dispatch({
            actionType: LoginConstant.LOGOUT
        });
    },
    error:(error) => {
        Dispatcher.dispatch({
            actionType: LoginConstant.ERROR,
            errors: error
        });
    }
}