import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <div>
        {/* Sample Navbar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/posts" element={<Posts />} />
          {/* Add any other routes you need */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
