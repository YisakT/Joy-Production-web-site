import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

function CustomersList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the customers from your backend API here
        axios.get('/api/customers')
            .then(response => {
                // Update the state with the fetched customers
                setCustomers(response.data);
            })
            .catch(error => {
                // Handle any errors here, e.g., display an error message
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <div className="customers-list">
            <h2>All Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CustomersList;
