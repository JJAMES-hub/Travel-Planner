export default function DestinationCard({ title, subtitle, img, href }) {
  return (
    <a className="card" href={href} target="_blank" rel="noreferrer">
      {img ? (
        <div className="card-media" style={{ backgroundImage: `url(${img})` }} />
      ) : (
        <div className="card-media placeholder" />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-sub">{subtitle}</p>}
      </div>
    </a>
  );
}
