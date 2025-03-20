import React from 'react';
import '../Styles/AuthStyles.css';

const SignUp = () => {
    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="#">Sign In</a></p>
        </div>
    );
};

export default SignUp;
