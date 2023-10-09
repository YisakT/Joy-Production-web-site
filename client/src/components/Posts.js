import React, { useState } from 'react';
import { Button, Container } from '@mantine/core';

const Post = () => {
    const [review, setReview] = useState('');

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmitReview = () => {
        // You can handle the submission of the review here
        console.log('Review:', review);
        // You can send the review to the server or perform any other actions as needed
        // Reset the review textarea after submission
        setReview('');
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
