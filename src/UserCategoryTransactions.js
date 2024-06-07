// UserCategoryTransactions.js

import React, { useState } from 'react';
import axios from 'axios';

const UserCategoryTransactions = () => {
    const [userId, setUserId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    const handleFetchTransactions = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/admin/users/${userId}/transactions/category/${categoryId}`);
            setTransactions(response.data.data);
            setError(null);
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
            setError('Failed to fetch transactions. Please try again.');
        }
    };

    return (
        <div>
            <h2>Get Transactions for User and Category</h2>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Category ID"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            />
            <button onClick={handleFetchTransactions}>Get Transactions</button>
            {error && <p>{error}</p>}
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        <p>Title: {transaction.title}</p>
                        <p>Description: {transaction.description}</p>
                        <p>Category: {transaction.categoryName}</p>
                        <p>Type: {transaction.transactionType}</p>
                        <p>Value: {transaction.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserCategoryTransactions;
