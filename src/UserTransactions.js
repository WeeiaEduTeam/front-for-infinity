// UserTransactions.js

import React, { useState } from 'react';
import axios from 'axios';

const UserTransactions = () => {
    const [userId, setUserId] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    const handleFetchTransactions = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/admin/users/${userId}/transactions`);
            setTransactions(response.data.data);
            setError(null);
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
            setError('Failed to fetch transactions. Please try again.');
        }
    };

    return (
        <div>
            <h2>User Transactions</h2>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleFetchTransactions}>Fetch Transactions</button>
            {error && <p>{error}</p>}
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        <strong>{transaction.title}</strong>: {transaction.value} ({transaction.transactionType})
                        <br />
                        Category: {transaction.categoryName}, Description: {transaction.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTransactions;
