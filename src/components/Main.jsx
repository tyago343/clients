import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './Login.jsx';
import Header from './Header.jsx';
import Clients from './Clients.jsx';

const Main = props => {
    useEffect(()=>{}, [props.user.name])
    return(
        <div>
            { !props.user.name ? <Login /> :
                <Fragment>
                <Header />
                <Clients />
                </Fragment>
                
        }
        </div>
    )
}
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, null)(Main)