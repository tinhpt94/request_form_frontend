/**
 * Created by thangkc on 26/01/2016.
 */
import React from 'react';

export default class ConfirmBoxComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{display: 'block', paddingRight: 13}} className="modal in" >
                <div style={{display: 'block', paddingRight: 17}} role="dialog" tabIndex={-1} className="modal fade in">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p className="ng-binding">{this.props.message || "Confirm"}</p>
                            </div>
                            <div className="modal-footer text-center">
                                <a className="btn btn-warning btn-raised ng-binding" onClick={this.props.actionOk}
                                   href="javascript: void(0)">はい</a>
                                <a className="btn btn-default btn-raised ng-binding" onClick={this.props.actionCancel}
                                   href="javascript: void(0)">いいえ</a>
                            </div>
                            <button data-dismiss="modal" className="close" type="button"
                                    onClick={this.props.actionClose}><i className="fa fa-close"/></button>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade in"></div>
            </div>
        )
    }
}
