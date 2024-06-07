// DeleteTransaction.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteTransaction = () => {
    const [transactionId, setTransactionId] = useState('');
    const [message, setMessage] = useState('');

    const handleDeleteTransaction = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/admin/users/transactions/${transactionId}`);
            setMessage('Transaction deleted successfully');
            setTransactionId('');
        } catch (error) {
            console.error('Failed to delete transaction:', error);
            setMessage('Failed to delete transaction. Please try again.');
        }
    };

    return (
        <div>
            <h2>Delete Transaction</h2>
            <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
            />
            <button onClick={handleDeleteTransaction}>Delete Transaction</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteTransaction;
