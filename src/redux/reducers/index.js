import { combineReducers } from 'redux';
import user from './User.js';
import clients from './Clients.js'

export default combineReducers({
    user,
    clients
})