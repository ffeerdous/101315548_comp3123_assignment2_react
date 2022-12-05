import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:3001/api/user/login",
            {
                username,
                password
            }
            );
            if (data){
                navigate("/api/emp/employees")
            }
            else{
                alert("Wrong")
            }
            localStorage.setItem("userInfo", JSON.stringify(data))   
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
                <label className='label'>Password</label>
                <div className='control'>
                    <input type="password" className='input'value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type="submit" className='button is-success'>Login</button>
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                <label className='label'>New User ?</label>
                <Link to="/api/user/signup" className='button is-info is-small'>Sign Up</Link>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login