/**
 * Created by thangkc on 26/01/2016.
 */
import React from 'react';
import AuthenticatedComponent from "../common/AuthenticatedComponent.jsx";
import UserStore from '../../stores/UserStore.jsx';
import UserService from '../../services/UserService.jsx';

export default AuthenticatedComponent(
    class UserListComponent extends React.Component {
        constructor() {
            super();
            this.state = this._getState();
            this._onChange = this._onChange.bind(this);
        }

        _getState() {
            return {
                initData: UserStore.getUserList(),
                filterData: UserStore.getFilteredData(),
                searchValue: UserStore.getSearchValue()
            };
        }
        componentDidMount() {
            UserService.list();
            UserStore.addChangeListener(this._onChange);
        }

        componentWillUnmount() {
            UserStore.removeChangeListener(this._onChange);
        }
        render() {
            return (
                <section id="UserListComponent">
                    <h2>User List</h2>
                    <div className="row">
                        User list
                    </div>
                </section>
            )
        }

    }
)
