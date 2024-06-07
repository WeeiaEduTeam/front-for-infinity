// CategoriesList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/catgories');
                setCategories(response.data.data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setError('Failed to fetch categories. Please try again.');
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            {error && <p>{error}</p>}
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;
