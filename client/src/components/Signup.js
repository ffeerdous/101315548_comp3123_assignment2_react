import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/api/user/signup",
            {
                username,
                email,
                password
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='columns'>
        <div className='column is-half'>
            <form onSubmit={submitHandler}>
            <div className='field'>
                <label className='label'>Username</label>
                <div className='control'>
                    <input type="text" className='input' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input type="text" className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                    <input type="password" className='input'value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type="submit" className='button is-success'>Sign Up</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup