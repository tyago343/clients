import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getClientUtil } from '../redux/actions/Clients';
import Search from './Search.jsx';

const Client = props => {
    const [ connections, setConnections ] = useState([]);
    const [ screen, setScreen] = useState(true);
    useEffect(() => {
        if(props.client.connections){
            let connections = props.clients.filter(client => props.client.connections.includes(client.id))
            setConnections(connections)
        }
    }, [props.client.connections])
    useEffect(()=>{
        props.getSingleClient(props.match.params.id)
    },[props.client.name, props.match.params.id])
    return(
        <div className="container single-client">
            { props.client.name &&
            <section className="ficha">
                <img src={props.client.avatar} alt={props.client.name}/>
                <div className='datos'>
                    <p>{props.client.name}</p>
                    <p>{props.client.description}</p>
                </div>
                <div>
                    <span>Connections</span>
                    <span>Statistics</span>
                </div>
            </section>
            }
            {
                (connections[0] && screen) ? (
                    <div>
                        <span>Connections</span>
                        <Search />
                        <ul className="client-list">
                            { connections.map(connection => (
                                <Link to={`/client/${connection.id}`}>
                                    <li className="client">
                                        <img src={connection.avatar} alt={connection.name} />
                                        <p>{connection.name}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                ) : ''
            }
        </div>
    )
}
const mapStateToProps = state => ({
    client: state.client,
    user: state.user,
    clients: state.clients
});
const mapDispatchToProps = dispatch => ({
    getSingleClient: (id) => dispatch(getClientUtil(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)