// RefreshToken.js

import React, { useState } from 'react';
import axios from 'axios';

const RefreshToken = ({ accessToken }) => {
    const [newAccessToken, setNewAccessToken] = useState('');
    const [error, setError] = useState('');

    const handleRefreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8080/security/refresh-token', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setNewAccessToken(response.data.accessToken);
            setError('');
        } catch (error) {
            console.error('Token refresh failed:', error);
            setError('Token refresh failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Refresh Token</h2>
            <button onClick={handleRefreshToken}>Refresh Token</button>
            {error && <p>{error}</p>}
            {newAccessToken && <p>New Access Token: {newAccessToken}</p>}
        </div>
    );
};

export default RefreshToken;
