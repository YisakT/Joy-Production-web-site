import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

function CustomerDetails() {
    const [customer, setCustomer] = useState(null);
    const [searchName, setSearchName] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            // Fetch customer details by ID if ID is provided
            axios.get(`/api/customers/${id}`)
                .then(response => {
                    setCustomer(response.data);
                })
                .catch(error => {
                    console.error('Error fetching customer details:', error);
                });
        }
    }, [id]);

    const handleSearch = () => {
        // Make a request to fetch customer information by name
        axios.get(`/api/customers?name=${searchName}`)
            .then(response => {
                setCustomer(response.data);
            })
            .catch(error => {
                console.error('Error fetching customer details:', error);
            });
    };

    if (!customer) {
        return (
            <div className="customer-details">
                <h2>Customer Details</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Enter customer name"
                        value={searchName}
                        onChange={e => setSearchName(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="customer-details">
            <h2>{customer.name}</h2>
            {/* Display other customer information here */}
        </div>
    );
}

export default CustomerDetails;
