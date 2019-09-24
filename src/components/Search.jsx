import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchClientUtil } from '../redux/actions/Clients';

const Search = props => {
    const [ searchValue, setSearchValue ] = useState('');
    const handleChange = evt => {
        evt.preventDefault();
        let value = evt.target.value;
        setSearchValue(value);
    }
    const handleClick = evt => {
        props.search(searchValue);
    }
    return (
        <div className="search-box">
            <input type="text" value={searchValue} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    search: value => dispatch(searchClientUtil(value))
})
export default connect(null, mapDispatchToProps)(Search);