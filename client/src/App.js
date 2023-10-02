import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core"; // Import MantineProvider
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.css";
import theme from "./theme"; // Import your custom theme

function App() {
  return (
    <Router>
      <MantineProvider theme={theme}> {/* Pass your custom theme here */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Add any other routes you need */}
          </Routes>
        </Layout>
      </MantineProvider>
    </Router>
  );
}

export default App;
