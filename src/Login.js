// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password,
            });

            // Extract tokens from response headers
            const accessToken = response.headers['access_token'];
            const refreshToken = response.headers['refresh_token'];

            // Store tokens in local storage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            // Set tokens in state
            setAccessToken(accessToken);
            setError('');

        } catch (error) {
            let errorMessage = 'Login failed. Please try again.';
            if (error.response) {
                errorMessage += ` ${error.response.status}: ${error.response.data.message}`;
            }
            setError(errorMessage);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
            {accessToken && <p>Access Token: {accessToken}</p>}
        </div>
    );
};

export default Login;
