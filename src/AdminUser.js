// AdminUsers.js

import React, { useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [createdUser, setCreatedUser] = useState(null);
    const [error, setError] = useState(null);

    const handleCreateAccount = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/admin/users', {
                email,
                password,
                username,
                roles: [{ name: 'user' }] // You can adjust roles as needed
            });
            setCreatedUser(response.data);
            setError(null);
        } catch (error) {
            console.error('Account creation failed:', error);
            setError('Account creation failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
            {createdUser && (
                <div>
                    <h3>Account Created Successfully</h3>
                    <pre>{JSON.stringify(createdUser, null, 2)}</pre>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default AdminUsers;
