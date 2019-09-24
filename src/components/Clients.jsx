import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchClientsUtil } from '../redux/actions/Clients';
import Search from './Search.jsx';
import { Link } from 'react-router-dom';

const Clients = props => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ clientsPerPage, setClientsPerPage ] = useState(8);
    const [ currentClients, setCurrentClients ] = useState([])
    const [ pageNumbers, setPageNumbers ] = useState(0)
    useEffect(()=>{
        props.fetchClients();
    }, [])
    useEffect(() => {
        let clientsNumber = props.clients.length;
        let indexOfLastClients = currentPage * clientsPerPage;
        let indexOfFirstClients = indexOfLastClients - clientsPerPage;
        props.clients[0] && setCurrentClients(props.clients.slice(indexOfFirstClients, indexOfLastClients));
        let configurePageNumbers = clientsNumber > 1 ? [...Array(clientsNumber / clientsPerPage).keys()] : [1];
        setPageNumbers(configurePageNumbers);
    }, [props.clients, currentPage])
    const handlePaginationClick = evt => {
        let id = evt.target.id;
        switch(id){
            case 'back':
                if((currentPage - 1) > 0){
                    return setCurrentPage(currentPage - 1);
                }
                return setCurrentPage(pageNumbers.length - 1)
            case 'next':
                if((currentPage + 1) < pageNumbers.length){
                    return setCurrentPage(currentPage + 1);
                }
                return setCurrentPage(1)
            default:
                return setCurrentPage(Number(id))
        }
    }
    return(
        <div className="container">
            <span>All Clients</span>
            <div className="pagination-buttons">
                <button id="back" onClick={handlePaginationClick}> {"<"}- Back</button>
                <button id="next" onClick={handlePaginationClick}>Next -></button>
            </div>
            <Search />
            <ul className="client-list">
                { currentClients[0] && currentClients.map(client => (
                    <Link to={`/client/${client.id}`}>
                        <li className="client">
                            <img src={client.avatar} alt={client.name} />
                            <p>{client.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className='pagination'>
                { pageNumbers[1] && pageNumbers.map(number => {
                    if(number) return <span key={number} id={number} className={currentPage === number ? 'active' : ''} onClick={handlePaginationClick}>{number}</span>
                }) }
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