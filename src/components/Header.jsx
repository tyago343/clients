import React from 'react';
import { connect } from 'react-redux';
import { logoutUserUtil } from '../redux/actions/Users';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <span className="home"><Link to='/'></Link>GoldenSpear</span>
            <button onClick={props.logout}>Logout</button>
        </header>
    )
};
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUserUtil())
});
export default connect(null, mapDispatchToProps)(Header);