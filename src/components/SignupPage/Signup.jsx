import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../LoginPage/login.css';

const Signup = () => {

    // navigate for routing the pages 
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="form">
                <h2> Create your account</h2>
                <div className="field">
                    <label htmlFor="text">Name</label>
                    <input type="text" name="text" id="text" placeholder='Enter your name'  />

                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email'  />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password'  />

                </div>

                <div className="field2">
                    <p  onClick={() => navigate('/login')}>Login</p>
                    <p>forget password</p>
                </div>

                <button>Signup</button>
            </div>
        </div>
    )
}

export default Signup