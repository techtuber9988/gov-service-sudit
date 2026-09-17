import React from "react";

export function Navigation({ currentPage, setPage }) {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => setPage("home")}>
          <span className="logo-icon">🇮🇳</span>
          <span className="logo-text">GovPortal</span>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#"
              className={currentPage === "home" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setPage("home"); }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "search" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setPage("search"); }}
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "about" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setPage("about"); }}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
