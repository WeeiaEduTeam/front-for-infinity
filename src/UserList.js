// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/admin/users');
                if (Array.isArray(response.data.data)) {
                    setUsers(response.data.data);
                    setError(null);
                } else {
                    setError('Invalid response format from the server.');
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
                setError('Failed to fetch users. Please try again.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Email:</strong> {user.email}, {user.id} <strong>Username:</strong> {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
