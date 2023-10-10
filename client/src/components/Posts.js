import React, { useState } from 'react';
import { Button, Container, TextInput } from '@mantine/core';  
import axios from 'axios';

const Post = () => {
    const [review, setReview] = useState('');
    const [reviewerName, setReviewerName] = useState('');  

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleNameChange = (e) => {  
        setReviewerName(e.target.value);
    };

    const handleSubmitReview = () => {
        const currentDate = new Date().toISOString(); 
    
        
        axios.post('/api/reviews', { content: review, reviewer_name: reviewerName, date_posted: currentDate })
            .then(response => {
                console.log('Review saved:', response.data);
                setReview('');  
                setReviewerName('');  
            })
            .catch(error => {
                console.error("Error saving review:", error);
            });
    };
    
    const backgroundImageUrl =
        'https://drive.google.com/uc?id=1Ejj014R0h6pfM7LqEYRZGHbRozWxZuha';

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

    const textareaStyle = {
        width: '45%',
        minHeight: '300px', 
        padding: '10px', 
        fontSize: '16px', 
    };

    return (
        <Container style={containerStyle}>
            <h2>Posts</h2>
            <TextInput
                value={reviewerName}
                onChange={handleNameChange}
                placeholder="Reviewer's Name"
                style={{ width: '45%', marginBottom: '10px' }}  
            />
            <br />
            <textarea
                value={review}
                onChange={handleReviewChange}
                placeholder="Add a review..."
                style={textareaStyle}
            />
            <br />
            <Button
                variant="filled"
                color="blue"
                onClick={handleSubmitReview}
                style={{ marginTop: '10px' }}
            >
                Submit Review
            </Button>
        </Container>
    );
};

export default Post;