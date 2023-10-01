// components/Register.js

import React, { useState } from "react";
import { Button, TextInput, Container, Paper, Text, Grid } from "@mantine/core";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call your backend API to register the user
        // Handle errors like mismatched passwords, existing username, etc.
    };

    return (
        <Container size={400} style={{ marginTop: "50px" }}>
            <Paper padding="md" shadow="xs">
                <Text align="center" size="xl">Register</Text>
                <form onSubmit={handleSubmit}>
                    <Grid gutter="md">
                        <TextInput
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value)}
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <TextInput
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                        />
                        <Button fullWidth variant="outline" type="submit">Register</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Register;
