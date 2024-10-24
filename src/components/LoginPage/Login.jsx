import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

    // navigate for routing the page
    const navigate = useNavigate();

    return (


        <div className="main">
            <form className="form">
                <h2>Welcome back !</h2>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' />

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