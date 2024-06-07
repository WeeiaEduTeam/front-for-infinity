// CreateTransaction.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateTransaction = () => {
    const [userId, setUserId] = useState('');
    const [transaction, setTransaction] = useState({
        categoryName: '',
        description: '',
        quantity: 0,
        title: '',
        transactionType: 'INCOME',
        value: 0
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreateTransaction = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/admin/users/${userId}/transactions`, transaction);
            console.log('Transaction created successfully', response.data);
            setError(null);
        } catch (error) {
            console.error('Failed to create transaction:', error);
            setError('Failed to create transaction. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create Transaction</h2>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category Name"
                name="categoryName"
                value={transaction.categoryName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Description"
                name="description"
                value={transaction.description}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                value={transaction.quantity}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={transaction.title}
                onChange={handleChange}
            />
            <select
                name="transactionType"
                value={transaction.transactionType}
                onChange={handleChange}
            >
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
            </select>
            <input
                type="number"
                placeholder="Value"
                name="value"
                value={transaction.value}
                onChange={handleChange}
            />
            <button onClick={handleCreateTransaction}>Create Transaction</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateTransaction;
