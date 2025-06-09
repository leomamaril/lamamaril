import "../assets/css/card.css";

export function HighLightedProjectsCard({ image, title }) {
  return (
    <div className="lam-hl-card">
      <img src={image} alt={title} className="rounded-5" width={'600'}/>
    </div>
  );
}

export function ProjectCard({
  onclick,
  image,
  title,
}) {
  return (
   <div className=" col-sm-6 col-md-4 mt-3">
  <div className="card rounded-5" onClick={onclick}>
    <div className="card-body p-0">
      <div className="position-relative hover-overlay">
        <img src={image} className="w-100 rounded-5" alt={title} />
        <div className="overlay-content">
          {title}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
