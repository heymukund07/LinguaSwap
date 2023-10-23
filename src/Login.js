import React from 'react';
import './Login.css'; // Import the CSS file
import googleIcon from './google-icon.png'; // Import the Google icon
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { auth } from './Chat.js';
import { useAuthState } from 'react-firebase-hooks/auth'; // Add this import statement
import { useNavigate } from 'react-router-dom';

import Chat from './Chat.js';

function Login() {
    const [user] = useAuthState(auth);
    const nav = useNavigate();

    if (user) {
        nav('/'); // Redirect to /chat if user is already logged in
        return null; // Return null to prevent rendering the login component
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(() => {
                nav('/chat'); // Redirect to /chat on successful login
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    }

    return (
        <div>
            <header>
                <h1>LinguaSwap</h1>
                <p>Connect, Communicate, Cultivate Fluency.</p>
            </header>
            <div className="login-container">
                <div className="login-box">
                    <h2>Welcome</h2>
                    <button className="google-button" onClick={signInWithGoogle}>
                        <img src={googleIcon} alt="Google Icon" className="google-icon" />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
