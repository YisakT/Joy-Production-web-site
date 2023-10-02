import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerDetails({ match }) {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        // Fetch the customer details using match.params.id from your backend API
        axios.get(`/api/customers/${match.params.id}`)
            .then(response => {
                // Set the fetched customer data in the state
                setCustomer(response.data);
            })
            .catch(error => {
                console.error('Error fetching customer details:', error);
            });
    }, [match.params.id]);

    if (!customer) return <div>Loading...</div>;

    return (
        <div className="customer-details">
            <h2>{customer.name}</h2>
            {/* Display bookings, feedbacks, and other customer-related details here */}
        </div>
    );
}

export default CustomerDetails;
