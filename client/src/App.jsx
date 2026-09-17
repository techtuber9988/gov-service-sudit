import { useState } from "react";
import { Home } from "./components/Home.jsx";
import { SearchPage } from "./components/SearchPage.jsx";
import { About } from "./components/About.jsx";
import { Navigation } from "./components/Navigation.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-wrapper">
      <Navigation currentPage={page} setPage={setPage} />

      <header className="hero-banner">
        <div className="container">
          <h1 className="hero-title">
            {page === "home" ? "Digital Governance" :
             page === "search" ? "Service Discovery" : "Our Initiative"}
          </h1>
          <p className="hero-tagline">
            {page === "home"
              ? "Experience the next generation of accessible government services."
              : page === "search"
                ? "Find the exact service or scheme you need in seconds."
                : "Dedicated to making government resources accessible to every citizen."}
          </p>
        </div>
      </header>

      <main className="container fade-in">
        {page === "home" && <Home />}
        {page === "search" && <SearchPage apiBaseUrl={API_BASE_URL} />}
        {page === "about" && <About />}
      </main>

      <footer className="main-footer">
        <div className="container">
          <p>&copy; 2026 National Portal of India. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Accessibility</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
