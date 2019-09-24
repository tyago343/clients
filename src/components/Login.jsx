import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUserUtil } from '../redux/actions/Users.js';
import { Redirect } from 'react-router-dom';
const Login = (props) => {
    useEffect(() => {
        if(props.user.name) {
            <Redirect to='/' />
        }
    }, [props.user])
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const handleChange = evt => {
        evt.stopPropagation();
        let field = evt.target.name;
        let value = evt.target.value;
        field === 'email' ? setEmail(value) : setPassword(value);
    }
    const handleSubmit = evt => {
        evt.stopPropagation();
        props.login(email, password);
    }
    return (
        <div className="component-login">
            <section className="left-side"></section>
            <section>
                <div className="login-box">
                    <img src="../images/img-login.png" alt=""/>
                    <div>
                        { props.user.message && props.user.message}
                        <label htmlFor="email">Correo electrónico</label>
                        <input name="email" type="text" value={email}  onChange={handleChange} />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" value={password} onChange={handleChange} />
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </section>
        </div>
    )

}
const mapDispatchToProps = dispatch => ({
    login: (email, password) =>{
        dispatch(loginUserUtil({email, password}))
    }
})
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)