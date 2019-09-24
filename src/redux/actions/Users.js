import axios from 'axios';
import { LOGINUSER, LOGERROR, LOGOUTUSER } from './types.js';

export const loginUser = user =>({
    type: LOGINUSER,
    user
})
export const logError = err => ({
    type: LOGERROR,
    err
})
export const logoutUser = user => ({
    type: LOGOUTUSER,
    user
})
export const loginUserUtil = user => dispatch => {
    axios.post('/api/v1/user/login', user)
    .then(({data})=>dispatch(loginUser(data)))
    .catch(err=>dispatch(logError({message: 'Email o contraseña incorrecta'})))
}
export const logoutUserUtil = () => dispatch => {
    axios.get('/api/v1/user/logout')
    .then(nothing => dispatch(logoutUser({name: '', email: ''})));
}