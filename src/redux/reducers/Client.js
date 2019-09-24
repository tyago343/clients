import { GETCLIENT } from '../actions/types.js';
const initialState = {};
export default (state = initialState, action) => {
    switch(action.type){
        case GETCLIENT: 
            return Object.assign({}, state, action.client);
        default:
            return state;
    }
}