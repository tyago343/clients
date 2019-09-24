import { combineReducers } from 'redux';
import user from './User.js';
import clients from './Clients.js'
import client from './Client.js'


export default combineReducers({
    user,
    clients,
    client
})