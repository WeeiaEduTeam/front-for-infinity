// UpdateUser.js

import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ userId }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState([]);
    const [secondName, setSecondName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/admin/users/${userId}`, {
                email,
                firstName,
                password,
                roles,
                secondName,
                username
            });
            console.log('User updated successfully:', response.data);
            setError(null);
        } catch (error) {
            console.error('Failed to update user:', error);
            setError('Failed to update user. Please try again.');
        }
    };

    return (
        <div>
            <h2>Update User Details</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Second Name"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleUpdateUser}>Update User</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default UpdateUser;
