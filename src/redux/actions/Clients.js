import axios from 'axios';
import { FETCHCLIENTS, SEARCHCLIENT, GETCLIENT } from './types.js';

export const fetchClients = clients => ({
    type: FETCHCLIENTS,
    clients
})
export const searchClient = clients => ({
    type: SEARCHCLIENT,
    clients
})
export const getClient = client => ({
    type: GETCLIENT,
    client
})
export const fetchClientsUtil = () => dispatch => {
    axios.get('/api/v1/clients/')
    .then(({data}) => dispatch(fetchClients(data)))
}
export const searchClientUtil = value => dispatch => {
    axios.get(`/api/v1/clients/${value}`)
    .then(({data}) => dispatch(searchClient([data])))
}
export const getClientUtil = id => dispatch => {
    axios.get(`/api/v1/clients/client/${id}`)
    .then(({data}) => dispatch(getClient(data)))
}