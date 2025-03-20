import React from 'react';
import '../Styles/AuthStyles.css';

const ForgotPassword = () => {
    return (
        <div className="auth-container">
            <h2>Forgot Password</h2>
            <form>
                <input type="email" placeholder="Enter your registered email" required />
                <button type="submit">Reset Password</button>
            </form>
            <p>Remembered your password? <a href="#">Sign In</a></p>
        </div>
    );
};

export default ForgotPassword;
