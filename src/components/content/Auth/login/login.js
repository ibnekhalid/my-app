import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { authenticationService } from '../service/auth-service'
//import './Login.css';

async function loginUser(credentials) {
    return true;
}

export default function Login() {
    const style = {
        'display': 'grid',
        'justify-content': 'center'
    }
    const style2 = { 'text-align': 'center' };
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        authenticationService.login(username, password);


    }

    return (
        <div className="login-wrapper contact-form">
            <h1 style={style2}>Please Log In</h1>
            <form onSubmit={handleSubmit} style={style}>
                <div className="row">
                    <div className="col-12">
                        <input type="text" placeholder="Username" className="form-control" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="col-12">

                        <input type="password" placeholder="Password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="form-control submit-btn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};