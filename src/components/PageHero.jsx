import { Link } from 'react-router-dom';

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryLabel = 'Book a Workshop',
  primaryTo = '/contact',
  primaryHref,
  secondaryLabel,
  secondaryTo
}) {
  return (
    <section className="page-hero section">
      <div className="container page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="button-row">
          {primaryHref ? (
            <a className="btn btn-primary" href={primaryHref} target="_blank" rel="noreferrer">{primaryLabel}</a>
          ) : (
            <Link className="btn btn-primary" to={primaryTo}>{primaryLabel}</Link>
          )}
          {secondaryLabel && <Link className="btn btn-secondary" to={secondaryTo}>{secondaryLabel}</Link>}
        </div>
      </div>
    </section>
  );
}
