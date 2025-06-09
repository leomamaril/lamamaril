import { Link, useParams, useNavigate } from "react-router-dom";

import { projectsData } from "../data/projectsData";
import { ProjectCard } from "../components/card";
import { Section } from "../components/container";
export default function Works() {
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    window.scrollTo(0, 0);
    navigate(`/myproject/${title}`);
  };

  const { title } = useParams();
  const project = projectsData.find((item) => item.title === title);


  if (!title || !project) return <p>Project Not Found</p>;
  return (
    <Section className="global-max-width" id="myprojects">
      <span className="">
        {" "}
        <Link to="/home" className="lam-text-accent">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/home#projects" className="lam-text-accent">
          Projects
        </Link>{" "}
        | {project.category} | {project.title}
      </span>

      <div className="row g-4 py-5">
        <div className="col-md-6">
          {/*Project Name */}
          <h1 className="mb-0">{project.title}</h1>
          {/* Project Category */}
          <h2 className="lam-text-accent mb-0">{project.category}</h2>
          {/* Project Sample Picture */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="img-fluid my-3 rounded-4"
          />

 {project.category == "Project" && (
            <>
<a href={project.websiteUrl} type="submit" className="text-center lam-btn w-100 rounded-2 mb-3">
                Visit Github
              </a>


              <div className="d-flex flex-wrap align-items-center gap-2 ">
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Client:</dt>
                  <dd className=" mb-0">{project.projectDetails.client}</dd>
                </dl>
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Role:</dt>
                  <dd className="mb-0">{project.projectDetails.role}</dd>
                </dl>
                
                 <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Tools:</dt>
                  <dd className="mb-0">{project.overview.tools}</dd>
                </dl>
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Duration:</dt>
                  <dd className="mb-0">{project.projectDetails.duration}</dd>
                </dl>
              </div>
            </>
          )}


          {/* Team Members*/}
          {project.category == "Collaboration Project" && (
            <>
              <div className="">
                <h2 className="">
                  Team <span className="lam-text-accent">Members</span>{" "}
                </h2>
                <div className="d-flex">
                  <h5 className="me-3 mb-1">UI/UX Designer:</h5>
                  <p className="mb-1">{project.collabTeam.ui}</p>
                </div>
                <div className="d-flex">
                  <h5 className="me-3">Web Developer:</h5>
                  <p className="">{project.collabTeam.web}</p>
                </div>
              </div>
            
              <a href={project.websiteUrl} type="submit" className="text-center lam-btn w-100 rounded-2 mb-3">
                Visit Website
              </a>
       
       
              {/* Project Details */}
              
              <div className="mt-3 d-flex flex-wrap align-items-center gap-2">
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Service:</dt>
                  <dd className="mb-0">{project.overview.service}</dd>
                </dl>
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Tools:</dt>
                  <dd className="mb-0">{project.overview.tools}</dd>
                </dl>
                <dl className="mb-0 d-flex align-items-center lam-box gap-1">
                  <dt className="fw-semibold me-2">Year:</dt>
                  <dd className="mb-0">{project.overview.year}</dd>
                </dl>
              </div>
            </>
          )}
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
          {/* Project Description */}
          <div>
            <h2 className="">
              Project <span className="lam-text-accent">Description</span>{" "}
            </h2>
            <p className="">{project.projectOverview}</p>
          </div>

          {/* Project Objectives */}

          <div>
            <h2 className="lam-text-accent">Objectives</h2>
            <ul>
              {project.objective.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </ul>
          </div>

          {project.category == "Personal Project" && (
            <>
              <a href={project.websiteUrl} type="submit" className="text-center lam-btn w-100 rounded-2 mb-3">
                Visit Website
              </a>
              {/* Project Details */}
              
            </>
          )}
          {project.category == "Collaboration Project" && (
            <>
              {/*Roles & Responsibilities */}
              <div>
                <h2 className="">
                  Roles &{" "}
                  <span className="lam-text-accent">Responsibilities</span>
                </h2>
                <div>
                  <h5>UI/UX Designer:</h5>
                  <ul>
                    {project.UI.map((items, index) => (
                      <li key={index}>{items}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Web Developer:</h5>
                  <ul>
                    {project.WEB.map((items, index) => (
                      <li key={index}>{items}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

         
        </div>
      </div>

      <div className="row py-5">
        <h2 className="">
          View more <span className="lam-text-accent">projects</span>{" "}
        </h2>
        {projectsData
          .sort(() => Math.random() - 0.5) // Randomize order
          .slice(0, 3)
          .map((items, index) => (
            <ProjectCard
              key={index}
              image={items.image}
              title={items.title}
              category={items.category}
              projectOverview={items.projectOverview}
              year={items.year}
              onclick={() => handleCardClick(items.title)}
            />
          ))}
      </div>
    </Section>
  );
}
