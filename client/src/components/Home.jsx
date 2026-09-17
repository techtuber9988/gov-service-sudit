import React from "react";

export function Home() {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2 className="animate-text">Welcome to the Future of Digital Governance</h2>
        <p className="animate-text-delay">
          A seamless, accessible, and transparent bridge between the government and its citizens.
        </p>
      </section>

      <div className="info-grid">
        <div className="info-card slide-up">
          <div className="info-icon">🚀</div>
          <h3>Fast Access</h3>
          <p>Find exactly what you need in seconds with our optimized search engine.</p>
        </div>
        <div className="info-card slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="info-icon">🛡️</div>
          <h3>Secure & Official</h3>
          <p>Direct links to verified government portals, ensuring your data is safe.</p>
        </div>
        <div className="info-card slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="info-icon">♿</div>
          <h3>Universal Access</h3>
          <p>Built with accessibility at its core, usable by every citizen regardless of ability.</p>
        </div>
      </div>

      <section className="cta-section animate-fade">
        <h3>Ready to find a service?</h3>
        <p>Explore thousands of government schemes and public services tailored for you.</p>
      </section>
    </div>
  );
}
