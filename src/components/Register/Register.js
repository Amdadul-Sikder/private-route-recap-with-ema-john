import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Creat Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Passwourd" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re Enter Your Passwourd" />
                    <br />
                    <input type="submit" value="Submit" />
                    <p>Allready have an Account? <Link to='/login'>Login</Link></p>
                    <div>-----------or----------</div>
                    <button className="btn-regular">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;