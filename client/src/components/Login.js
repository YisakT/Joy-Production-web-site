// components/Login.js
import React from "react";
import { Container, Paper, Text, Grid } from "@mantine/core";
import { SignIn, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

function Login() {
  const { isSignedIn } = useUser();

  return (
    <Container size={400} style={{ marginTop: "50px" }}>
      <Paper padding="md" shadow="xs">
        <Text align="center" size="xl">
          Login
        </Text>
        <Grid gutter="md">
          {/* Show different content based on whether the user is signed in or not */}
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
  );
}

export default Login;
