import { LOGINUSER, LOGOUTUSER, LOGERROR } from '../actions/types.js';
const initialState = {};
export default (state = initialState, action) => {
    switch(action.type){
        case LOGINUSER:
            return Object.assign({}, state, action.user);
        case LOGOUTUSER:
            return Object.assign({}, state, action.user);
        case LOGERROR:
            return Object.assign({}, state, action.err);
        default:
            return state;
    }
}