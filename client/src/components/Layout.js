import { Container, Paper, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <Container size={1200} style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <Paper
          style={{
            width: "240px",
            marginRight: "20px",
            padding: "20px",
            backgroundColor: "var(--mantine-color-scheme-dark-background)",
          }}
        >
          <Text
            size="xl"
            style={{
              marginBottom: "20px",
              color: "var(--mantine-color-scheme-dark-text)",
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
          {/* Add other links as needed */}
        </Paper>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </Container>
  );
}

export default Layout;
