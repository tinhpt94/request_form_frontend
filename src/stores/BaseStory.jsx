/**
 * Created by thangkc on 14/12/2015.
 */
import EventEmitter from 'events';
import Dispatcher from '../dispatcher/Dispatcher.jsx';

const CHANGE_EVENT = 'change';

export default class BaseStory extends EventEmitter {
    constructor() {
        super();
    }

    subscribe(actionSubscribe) {
        this._dispatchToken = Dispatcher.register(actionSubscribe());
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}