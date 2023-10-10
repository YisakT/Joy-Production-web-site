import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEditCustomer from "./components/AddEditCustomer"; 
import CustomerDetails from "./components/CustomerDetails"; 
import CustomersList from "./components/CustomersList"; 
import Reviews from "./components/Reviews"; // Newly added
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
              <Route path="/reviews" element={<Reviews />} /> {/* Newly added */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-customer" element={<AddEditCustomer />} />
              <Route path="/customer/:id" element={<CustomerDetails />} />
              <Route path="/customers" element={<CustomersList />} /> 
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
