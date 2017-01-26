/**
 * Created by thangkc on 14/12/2015.
 */
import BaseStory from './BaseStory.jsx'
import UserConstant from '../constants/UserConstant.jsx'

class UserStore extends BaseStory {
    constructor() {
        super();
        this.listData = [];
        this.filteredData = [];
        this.searchStr = '';
        this.subscribe(() => this.handler.bind(this));

    }

    /**
     * Register callback to handle all updates
     *
     * @param  {Object} action
     */
    handler(action) {
        switch (action.actionType) {
            case UserConstant.LIST:
                this.listData =  action.designs;
                const filteredData = action.designs;
                this.filteredData =  filteredData;
                this.status = action.status;
                this.emitChange();
                break;
            default :
        }
    }

    getUserList() {
        return this.listData
    }


    getSearchValue() {
        return this.searchStr
    }

    setSearchValue(str) {
        this.searchStr = str;
    }

    setFilteredData(data) {
        this.filteredData = data;
    }

    getFilteredData() {
        return this.filteredData
    }


}

const userStore = new UserStore();

export default userStore;