// DeleteUser.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState(null);

    const handleDeleteUser = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/admin/users/${userId}`);
            console.log('User deleted successfully');
            setError(null);
            setUserId(''); // Clear input after successful deletion
        } catch (error) {
            console.error('Failed to delete user:', error);
            setError('Failed to delete user. Please try again.');
        }
    };

    return (
        <div>
            <h2>Delete User</h2>
            <p>Enter the User ID you want to delete:</p>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <button onClick={handleDeleteUser}>Delete User</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default DeleteUser;
