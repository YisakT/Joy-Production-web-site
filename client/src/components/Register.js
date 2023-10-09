import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Container, Paper, Button, TextField, Typography } from '@mui/material';

const RegistrationForm = () => {
  const handleRegistrationSuccess = () => {
    // You can redirect or handle the registration success here
    console.log('Registration successful');
  };

  const outerContainerStyle = {
    backgroundImage: 'url("https://drive.google.com/uc?id=1e9WVpfwLIM9_14YJT4qL2rUF44dT9IyR")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const innerContainerStyle = {
    maxWidth: 'sm',
  };

  const paperStyle = {
    padding: '2rem',
  };

  return (
    <div style={outerContainerStyle}>
      <Container maxWidth="sm" sx={innerContainerStyle}>
        <Paper elevation={3} sx={paperStyle}>
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
    </div>
  );
};

export default RegistrationForm;
