import React from 'react';

function Home() {
    const backgroundImageUrl = "https://drive.google.com/uc?id=1WJ2hgC-G7vUiqGqKxqHLRi9Z1RjoGbIq";

    const homeStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FF7518',
        textAlign: 'center', 
        padding: '30px', 
    };

    const headerStyle = {
        fontSize: '40px',
        background: 'rgba(0, 0, 0, 0.5)', 
        padding: '10px', 
        borderRadius: '5px', 
        color: '#FF8C00', 
        marginBottom: '20px',
    };
    
    const paragraphStyle = {
        fontSize: '25px',
        background: 'rgba(0, 0, 0, 0.5)', 
        padding: '10px', 
        borderRadius: '5px', 
        color: '#FF7518',
    };
    

    return (
        <div className="home" style={homeStyle}>
            <h1 style={headerStyle}>Capturing Life's Moments</h1>


            <p style={paragraphStyle}>
                "Welcome to Joy Production, Where We Capture Precious Moments and Weave Them into Timeless Memories – Your Story, Your Legacy."
            </p>
        </div>
    );
}

export default Home;
