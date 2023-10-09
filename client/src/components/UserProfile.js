import React from 'react';
import { Text } from '@mantine/core';
import { useUser } from '@clerk/clerk-react';

const UserProfile = () => {
  const { user, isSignedIn } = useUser();

  const backgroundImageUrl = "https://drive.google.com/uc?id=14r7JquDzaypvmXvO1bHEwoen4D9YuLXd";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set the minimum height to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
    padding: '20px', // Add some padding for readability
  };

  return (
    <div style={containerStyle}>
      {isSignedIn ? (
        <div>
          <Text align="center" size="xl">
            User Profile
          </Text>
          <div>
            <Text>Name: {user.firstName} {user.lastName}</Text>
            <Text>Email: {user.email}</Text>
            {/* You can display other user information here */}
          </div>
        </div>
      ) : (
        <Text align="center">Please sign in to view your profile.</Text>
      )}
    </div>
  );
};

export default UserProfile;
