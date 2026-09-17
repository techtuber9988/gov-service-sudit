import React from "react";

export function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h2>About the National Services Portal</h2>
        <p className="about-subtitle">
          Empowering citizens through digital accessibility and transparency.
        </p>
      </section>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To provide a single, accessible window for all government services,
            ensuring that every citizen, regardless of their technical ability,
            can access essential public resources.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">♿</div>
          <h3>Accessibility First</h3>
          <p>
            We follow strict WCAG 2.1 guidelines to ensure our portal is usable
            by everyone, including those using screen readers and keyboard-only navigation.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">🛡️</div>
          <h3>Transparency</h3>
          <p>
            Reducing bureaucracy by providing direct, clear links to government
            schemes, reducing the need for intermediaries.
          </p>
        </div>
      </div>

      <section className="about-footer">
        <h3>Digital India Initiative</h3>
        <p>
          This portal is part of the broader effort to transform India into
          digitally empowered society and knowledge economy.
        </p>
      </section>
    </div>
  );
}
