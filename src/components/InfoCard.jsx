export default function InfoCard({ icon, image, title, text }) {
  return (
    <article className="info-card">
      {image && <img className="info-card-image" src={image} alt="" />}
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
