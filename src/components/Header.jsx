import React from 'react';
import { connect } from 'react-redux';
import { logoutUserUtil } from '../redux/actions/Users';

const Header = props => {
    return (
        <header>
            <span className="logo"></span>
            <button onClick={props.logout}>Logout</button>
        </header>
    )
};
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUserUtil())
});
export default connect(null, mapDispatchToProps)(Header);