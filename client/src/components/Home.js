import React from 'react';

function Home() {
    const backgroundImageUrl = "https://drive.google.com/uc?id=1WJ2hgC-G7vUiqGqKxqHLRi9Z1RjoGbIq";

    // Style for the top section with the background image, text, etc.
    const topSectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',  // Adjusting height to 50% of the viewport height
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

    // Array of YouTube video embed URLs
    const videoUrls = [
        "https://www.youtube.com/embed/6_KU1YS4xt0",
        "https://www.youtube.com/embed/KVPQRVI01Eo",
        "https://www.youtube.com/embed/fNUR900TD5o",
        "https://www.youtube.com/embed/mE9YVPgQ3cI",
        "https://www.youtube.com/embed/IhdTcBtZqEs",
        "https://www.youtube.com/embed/f9FvvKtaVXs",
        "https://www.youtube.com/embed/E6DF_TuzUtc",
        "https://www.youtube.com/embed/QFmTwnC_aW0",
        
        

    ];

    // Style for the video section
    const videoSectionStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#fff',  // Clear or white background for the video section
    };

    return (
        <div className="home">
            {/* Top Section with Image and Text */}
            <div style={topSectionStyle}>
                <h1 style={headerStyle}>Capturing Life's Moments</h1>
                <p style={paragraphStyle}>
                    "Welcome to Joy Production, Where We Capture Precious Moments and Weave Them into Timeless Memories – Your Story, Your Legacy."
                </p>
            </div>

            {/* Video Section */}
            <div style={videoSectionStyle}>
                {videoUrls.map((url, index) => (
                    <iframe
                        key={index}
                        width="100%"
                        height="315"
                        src={url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Video ${index}`}
                    ></iframe>
                ))}
            </div>
        </div>
    );
}

export default Home;
