import React, { useState } from 'react';

function AddEditCustomer(props) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Post the data to your backend API here
        console.log("Submitted", { name });
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
