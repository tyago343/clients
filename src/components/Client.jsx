import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getClientUtil } from '../redux/actions/Clients';

const Client = props => {
    useEffect(()=>{
        props.getSingleClient(props.match.params.id)
    },[props.client])
    return(
        <div className="container">
            {props.client.name && props.client.name}
        </div>
    )
}
const mapStateToProps = state => ({
    client: state.client,
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    getSingleClient: (id) => dispatch(getClientUtil(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)