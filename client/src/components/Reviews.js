import React, { useEffect, useState } from "react";
import { Paper, Text } from "@mantine/core"; 
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [triggerRender, setTriggerRender] = useState(false);

    useEffect(() => {
        axios.get('/api/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    }, [triggerRender]);

    const forceRerender = () => {
        setTriggerRender(!triggerRender);
    };

    return (
        <div style={{ backgroundColor: "#004242", height: "100vh" }}>
            <h2>Reviews</h2>
            <button onClick={forceRerender}>Refresh Reviews</button>
            {reviews.map((review, index) => (
                <Paper
                    key={index}
                    style={{
                        margin: "20px 0",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#808080", 
                        color: "#ffffff", 
                    }}
                >
                    <Text style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        {review.reviewer_name} - {review.date_posted}
                    </Text>
                    <Text>{review.content}</Text>
                </Paper>
            ))}
        </div>
    );
};

export default Reviews;
