import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Container, Paper, Button, TextField, Typography } from '@mui/material';

const RegistrationForm = () => {
  const handleRegistrationSuccess = () => {
    // You can redirect or handle the registration success here
    console.log('Registration successful');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h5" component="div" gutterBottom>
          Register
        </Typography>
        {/* Your existing registration form fields */}
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Clerk SignUp component */}
        <SignUp onSuccess={handleRegistrationSuccess} />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '1rem' }}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
