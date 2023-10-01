import React, { useState, useEffect } from 'react';

function CustomerDetails({ match }) {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        // Fetch the customer details using match.params.id from your backend API
        // and set them in the customer state
        // For demonstration, using dummy data:
        setCustomer({id: match.params.id, name: "John Doe", bookings: [], feedbacks: []});
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
