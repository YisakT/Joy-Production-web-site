import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import './styles.css';
import theme from './theme'; 

function App() {
  return (
    <Router>
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
    </Router>
  );
}

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}

export default Demo;
