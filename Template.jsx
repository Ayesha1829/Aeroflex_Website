import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import '../Styles/AuthStyles.css'; // Make sure the path is correct

const Template = () => {
    const [authView, setAuthView] = useState('signin');

    const renderView = () => {
        switch (authView) {
            case 'signin':
                return <SignIn />;
            case 'signup':
                return <SignUp />;
            case 'forgot':
                return <ForgotPassword />;
            default:
                return <SignIn />;
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-nav">
                <button onClick={() => setAuthView('signin')}>Sign In</button>
                <button onClick={() => setAuthView('signup')}>Sign Up</button>
                <button onClick={() => setAuthView('forgot')}>Forgot Password</button>
            </div>
            <div className="auth-view">{renderView()}</div>
        </div>
    );
};

export default Template;
