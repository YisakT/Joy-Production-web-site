import React from "react";
import { Container, Paper, Text, Grid } from "@mantine/core";
import { SignIn, SignedIn, SignedOut, UserButton,} from "@clerk/clerk-react";

function Login() {
  

  const backgroundImageUrl = "https://drive.google.com/uc?id=17U3IvFKR39bqQZYL71HRBAsKl2bFHAoA";

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
    padding: '20px', 
  };

  return (
    <div style={containerStyle}>
      <Container size={400}>
        <Paper padding="md" shadow="xs" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <Text align="center" size="xl">
            Login
          </Text>
          <Grid gutter="md">
            
            <SignedOut>
              <SignIn routing="path" path="/login" />
            </SignedOut>
            <SignedIn>
              <Text align="center">
                You are already signed in. <UserButton />
              </Text>
            </SignedIn>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
