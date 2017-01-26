/**
 * Created by thangkc on 08/12/2015.
 */
import Dispatcher from '../dispatcher/Dispatcher.jsx'
import UserConstant from '../constants/UserConstant.jsx'
export default  {
    list: (users) => {
        Dispatcher.dispatch({
            actionType: UserConstant.LIST,
            designs: users
        });
    }
}