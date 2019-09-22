import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchClientsUtil } from '../redux/actions/Clients';
import Search from './Search.jsx';

const Clients = props => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ clientsPerPage, setClientsPerPage ] = useState(8);
    const [ currentClients, setCurrentClients ] = useState([])
    const [ pageNumbers, setPageNumbers ] = useState(0)
    useEffect(()=>{
        props.fetchClients();
    }, [])
    useEffect(() => {
        const indexOfLastClients = currentPage * clientsPerPage;
        const indexOfFirstClients = indexOfLastClients - clientsPerPage;
        props.clients[0] && setCurrentClients(props.clients.slice(indexOfFirstClients, indexOfLastClients));
        setPageNumbers([...Array(props.clients.length / clientsPerPage).keys()]);
    }, [props.clients, currentPage])
    const handlePaginationClick = evt => {
        setCurrentPage(Number(evt.target.id));
    }
    return(
        <div>
            <span>All Clients</span>
            <Search />
            <ul>
                { currentClients[0] && currentClients.map(client => (
                    <li>
                        <img src={client.avatar} alt={client.name} />
                        <p>{client.name}</p>
                    </li>
                ))}
            </ul>
            <div className='pagination'>
                { pageNumbers[1] && pageNumbers.map(number => (
                    number === 0 ? '' : <span key={number} id={number} className={currentPage === number ? 'active' : ''} onClick={handlePaginationClick}>{number}</span>
                )) }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    clients: state.clients
});
const mapDispatchToProps = dispatch => ({
    fetchClients: () => dispatch(fetchClientsUtil())
})
export default connect(mapStateToProps, mapDispatchToProps)(Clients)