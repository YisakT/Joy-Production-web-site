// components/Login.js

import React, { useState } from "react";
import { Button, TextInput, Container, Paper, Text, Grid } from "@mantine/core";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call your backend API to authenticate the user
        // Store the token (if received) in local storage or session
    };

    return (
        <Container size={400} style={{ marginTop: "50px" }}>
            <Paper padding="md" shadow="xs">
                <Text align="center" size="xl">Login</Text>
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
                        <Button fullWidth variant="outline" type="submit">Login</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;
