import axios from 'axios';
import { FETCHCLIENTS, SEARCHCLIENT } from './types.js';

export const fetchClients = clients => ({
    type: FETCHCLIENTS,
    clients
})
export const searchClient = clients => ({
    type: SEARCHCLIENT,
    clients
})
export const fetchClientsUtil = () => dispatch => {
    axios.get('/api/v1/clients/')
    .then(({data}) => dispatch(fetchClients(data)))
}
export const searchClientUtil = value => dispatch => {
    axios.get(`/api/v1/clients/${value}`)
    .then(({data}) => dispatch(searchClient(data)))
}