import { useState } from "react";
import "./App.css";

import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  // Login successful hua ya nahi, ye track karega
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <>
          {/* Main Home Page */}
          <nav className="navbar">
            <h1>Placement Portal</h1>

            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Students</a>
              <a href="#">Jobs</a>
              <a href="#">Companies</a>
              <a href="#">Login</a>
            </div>
          </nav>

          <section className="hero">
            <div className="hero-content">
              <h2>Build Your Career With Us</h2>

              <p>
                Discover opportunities, connect with companies and take the next
                step toward your dream career.
              </p>

              <button className="btn">Explore Jobs</button>
            </div>
          </section>

          <section className="features">
            <div className="card">
              <h3>🎓 Student Portal</h3>
              <p>Create your profile and showcase your skills.</p>
            </div>

            <div className="card">
              <h3>💼 Job Opportunities</h3>
              <p>Find suitable jobs and placement opportunities.</p>
            </div>

            <div className="card">
              <h3>🏢 Top Companies</h3>
              <p>Connect with companies hiring fresh graduates.</p>
            </div>
          </section>

          {/* Login page ko login state change karne ka function dena */}
          <Login onLogin={() => setIsLoggedIn(true)} />
        </>
      ) : (
        // Login successful hone ke baad Dashboard dikhega
        <Dashboard />
      )}
    </div>
  );
}

export default App;