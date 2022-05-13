import React, { useState } from 'react';
import Api from '../api';

const API = {
    register: async data => {
        const result = Api.post('account', data);
        return result.data.result;
    }
}

export default RegisterForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changeEmail = e => setEmail(e.target.value);
    const changePassword = e => setPassword(e.target.value);
    const changeConfirmPassword = e => setConfirmPassword(e.target.value);

    const register = e => {
        e.preventDefault();
        try {
            await API.register({email, password, confirmPassword});
        } catch (ex) {
            console.log(ex);
            alert(ex.message);
        }
    }

    return <div>
        <label for='email'>Email:</label>
        <input id='email' type='text' name='email' value={email} onChange={changeEmail} /><br />
        <label for='password'>Password:</label> 
        <input id='password' type='password' name='password' value={password} onChange={changePassword} /><br />
        <label for='confirmPassword'>Confirm Password:</label> 
        <input id='confirmPassword' type='password' name='confirmPassword' value={confirmPassword} onChange={changeConfirmPassword} /><br />
        <button onClick={register}>Register</button>
    </div>
}

