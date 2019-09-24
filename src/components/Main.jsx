import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import Header from './Header.jsx';
import Clients from './Clients.jsx';
import Client from './Client.jsx';


const Main = props => {
    useEffect(()=>{
    }, [props.user.name])
    return(
        <div>
            { !props.user.name ? <Login /> :
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path='/client/:id' component={Client} exact/>
                        <Route path='/' component={Clients} exact/>
                    </Switch>
                </Fragment>
        }
        </div>
    )
}
const mapStateToProps = state => ({
    user: state.user,
})
export default connect(mapStateToProps, null)(Main)