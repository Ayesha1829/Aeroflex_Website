import React from 'react';
import '../Styles/AuthStyles.css';

const SignIn = () => {
    return (
        <div className="auth-container">
            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
            <p><a href="#">Forgot Password?</a></p>
        </div>
    );
};

export default SignIn;
