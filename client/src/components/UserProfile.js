import React from 'react';
import { Text } from '@mantine/core';
import { useUser } from '@clerk/clerk-react';

const UserProfile = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div>
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
