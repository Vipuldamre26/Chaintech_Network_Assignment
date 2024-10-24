import { useNavigate } from 'react-router-dom';
import './login.css';
import { useEffect, useState } from 'react';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // navigate for routing the page
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userdata'));

    useEffect(() => {
        if(userData && userData.length > 0){
            let timer = setTimeout(() => {
                navigate('/');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [userData, navigate])


    const loginUser = (e) => {

        e.preventDefault();

        if(email && password){
            localStorage.setItem('userdata', JSON.stringify([{email, password}]));
            setTimeout(() => {
                navigate('/');
            }, 2000)
        }
    }

    return (


        <div className="main">
            <form className="form" action='' onSubmit={loginUser}>
                <h2>Welcome back !</h2>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />

                </div>

                <div className="field2">
                    <p onClick={() => navigate('/signup')} >Signup</p>
                    <p>forget password</p>
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}


export default Login