import React from "react";
import { Container, Paper, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const theme = useMantineTheme();

  return (
    <Container size={1200} style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <Paper
          style={{
            width: "240px",
            marginRight: "20px",
            padding: "20px",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[7] // Dark background color
                : theme.colors.gray[0], // Light background color
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0] // Dark text color
                : theme.colors.gray[9], // Light text color
          }}
        >
          <Text
            size="xl"
            style={{
              marginBottom: "20px",
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0] // Dark text color
                  : theme.colors.gray[9], // Light text color
            }}
          >
            Menu
          </Text>
          <Link to="/">Home</Link>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <br />
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
          <Link to="/customers">Customers List</Link><br />
          <Link to="/add-customer">Add/Edit Customer</Link><br />
          <Link to="/customer/:id">Customer Details</Link><br />
  
        </Paper>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </Container>
  );
}

export default Layout;
