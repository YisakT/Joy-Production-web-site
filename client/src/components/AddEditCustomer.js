import React, { useState } from 'react';
import axios from 'axios';


function AddEditCustomer(props) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a data object to send to the backend
        const data = {
            name: name
            // Add other fields as needed
        };
    
        // Make a POST request to create a new customer
        axios.post('/api/customers', data)
            .then(response => {
                // Handle the response data if needed
                console.log('Customer created successfully:', response.data);
    
                // Optionally, you can redirect the user to another page or perform any other action
            })
            .catch(error => {
                // Handle any errors
                console.error('Error creating customer:', error);
            });
    };
    

    return (
        <div className="add-edit-customer">
            <h2>Add/Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder="Customer Name"
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditCustomer;
