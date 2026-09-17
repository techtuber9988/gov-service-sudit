import React from "react";
import { ServiceSearch } from "./ServiceSearch.jsx";

export function SearchPage({ apiBaseUrl }) {
  return (
    <div className="search-page-container fade-in">
      <div className="search-header">
        <h2>Search Public Services</h2>
        <p>Enter a keyword to discover government schemes and services available to you.</p>
      </div>
      <ServiceSearch apiBaseUrl={apiBaseUrl} />
    </div>
  );
}
