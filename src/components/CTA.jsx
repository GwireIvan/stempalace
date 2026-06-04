import { Link } from 'react-router-dom';

export default function CTA({ title, text, label = 'Contact Us' }) {
  return (
    <section className="section cta-section">
      <div className="container cta-panel">
        <div>
          <p className="eyebrow">Ready to build?</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-primary" to="/contact">{label}</Link>
      </div>
    </section>
  );
}
