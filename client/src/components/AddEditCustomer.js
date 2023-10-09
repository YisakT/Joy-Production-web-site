import React, { useState } from 'react';
import axios from 'axios';

function AddEditCustomer(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [customerId, setCustomerId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a data object to send to the backend
        const data = {
            name: name,
            email: email,
            phone_number: phoneNumber,
        };

        // Make a POST request to create a new customer
        axios
            .post('/api/customers', data)
            .then((response) => {
                console.log('Customer created successfully:', response.data);
                setCustomerId(response.data.id);
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error creating customer:', error);
            });
    };

    const backgroundImageUrl =
        'https://drive.google.com/uc?id=1c0cgBXG_ICf3ChaLalYoj1bZRlU59Bqc';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    };

    return (
        <div className="add-edit-customer" style={containerStyle}>
            <h2>Add/Edit Customer</h2>
            {customerId ? (
                <div>
                    <p>Customer ID: {customerId}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Customer Name"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                    />
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    );
}

export default AddEditCustomer;
