// UserTransactions.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User2Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/users/transactions');
                setTransactions(response.data);
                setError(null);
            } catch (error) {
                console.error('Failed to fetch transactions:', error);
                setError('Failed to fetch transactions. Please try again.');
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>User Transactions</h2>
            {error && <p>{error}</p>}
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.title} - {transaction.value} - {transaction.transactionType} - {transaction.categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User2Transaction;
