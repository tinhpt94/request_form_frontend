/**
 * Created by thangkc on 14/12/2015.
 */
import BaseStory from './BaseStory.jsx'
import LoginConstant from '../constants/LoginConstant.jsx'

class LoginStore extends BaseStory {
    constructor() {
        super();
        this.userLoggedIn = null;
        this.error = null;
        this.subscribe(() => this.handler.bind(this));
    }

    /**
     * Register callback to handle all updates
     *
     * @param  {Object} action
     */
    handler(action) {
        switch (action.actionType) {
            case LoginConstant.LOGIN_USER:
                this.userLoggedIn =  action.user;
                this.error = null;
                this.emitChange();
                break;
            case LoginConstant.LOGOUT:
                this.userLoggedIn =  null;
                this.emitChange();
                break;
            case LoginConstant.ERROR:
                this.error = action.errors;
                this.emitChange();
                break;
            default :
        }
    }

    loggedInUser() {
        return this.userLoggedIn
    }

    LoginError() {
        return this.error
    }


}

const loginStore = new LoginStore();

export default loginStore;