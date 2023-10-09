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

    const backgroundImageUrl = "https://drive.google.com/uc?id=14Sc67qkE_D4F0S8l4YrBwbuKpnUE1BrM";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align content to the top-left
        color: 'white',
        padding: '20px',
    };

    return (
        <div className="customers-list" style={containerStyle}>
            <h2>All Customers</h2>
            <ul style={{ listStyle: 'disc' }}>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CustomersList;
