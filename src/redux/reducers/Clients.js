import { FETCHCLIENTS } from '../actions/types.js';
const initialState = [];
export default (state = initialState, action) => {
    switch(action.type){
        case FETCHCLIENTS:
            return Object.assign([], state, action.clients);
        default:
            return state;
    }
}