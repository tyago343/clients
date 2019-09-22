import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchClientUtil } from '../redux/actions/Clients';

const Search = props => {
    const [ searchValue, setSearchValue ] = useState('');
    const handleChange = evt => {
        evt.preventDefault();
        let value = evt.target.value;
        props.search(value);
        setSearchValue(value);
    }
    return (
        <div>
            <input type="text" value={searchValue} onChange={handleChange}/>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    search: value => dispatch(searchClientUtil(value))
})
export default connect(null, mapDispatchToProps)(Search);