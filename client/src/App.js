import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import "./styles.css";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ClerkProvider
        publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
        navigate={(to) => {
          window.location.href = to;
        }}
      >
        <MantineProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add any other routes you need */}
              <Route
                path="/protected"
                element={
                  <>
                    <SignedIn>
                      {/* This component is only accessible to signed-in users */}
                      {/* You can place any content here that should be protected */}
                    </SignedIn>
                    <SignedOut>
                      {/* Redirect to sign-in if not authenticated */}
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
            </Routes>
          </Layout>
        </MantineProvider>
      </ClerkProvider>
    </Router>
  );
}

export default App;
