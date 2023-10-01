import React, { useState, useEffect } from 'react';

function CustomersList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the customers from your backend API here
        // and set them in the customers state
        // For demonstration purposes, I'll use dummy data
        setCustomers([{id: 1, name: "John Doe"}, {id: 2, name: "Jane Smith"}]);
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
