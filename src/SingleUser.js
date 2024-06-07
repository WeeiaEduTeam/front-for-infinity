// SingleUser.js

import React, { useState } from 'react';
import axios from 'axios';

const SingleUser = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleFetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/admin/users/${userId}`);
            setUser(response.data.data);
            setError('');
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setError('Failed to fetch user. Please try again.');
            setUser(null);
        }
    };

    return (
        <div>
            <h2>Fetch Single User</h2>
            <input
                type="number"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleFetchUser}>Fetch User</button>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h3>User Details</h3>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Second Name: {user.secondName}</p>
                    <p>Roles: {user.roles.map(role => role.name).join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default SingleUser;
