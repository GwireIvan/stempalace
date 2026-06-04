import { Link } from 'react-router-dom';
import { navLinks } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <video
        className="footer-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/7868254/7868254-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="footer-overlay" aria-hidden="true" />
      <div className="container">
        <div className="footer-content-panel">
          <div className="footer-grid">
            <div>
              <Link className="footer-brand" to="/">
                <img src="/stem-palace-logo-light.png" alt="STEM Palace logo" />
                <span>STEM Palace</span>
              </Link>
              <p>
                Uganda-based STEM, coding and robotics programmes built for schools,
                learners and organisations that want practical digital capability.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>
                <Link to="/contact">Contact</Link>
              </h3>
              <p>Plot 2090 Ndiwulira Road, Mbalwa Kiira, Kampala</p>
              <p>Contact: 0781514157 or 0709174397</p>
              <p>Email: info.stempalace@gmail.com</p>
              <div className="social-links">
                <a href="https://wa.me/256781514157" target="_blank" rel="noreferrer">WhatsApp</a>
                <a href="https://www.youtube.com/@STEMPalace" target="_blank" rel="noreferrer">YouTube</a>
                <a href="https://www.instagram.com/stempalace/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/@stempalace" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        (c) {new Date().getFullYear()} STEM Palace. All rights reserved. Background video via Pexels.
      </div>
    </footer>
  );
}
