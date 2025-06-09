import { Section } from "../../components/container";

import { projectsData } from "../../data/projectsData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectCard } from "../../components/card";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(projectsData.map((item) => item.category)),
  ];
  const filteredServices =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);

  const navigate = useNavigate();
  const handleCardClick = (title) => {
    window.scrollTo(0, 0);
    navigate(`/myproject/${title}`);
  };

  return (
    <Section className="global-max-width" id="projects">
      <div className="row g-0 align-items-center">
        <div className="col-lg-8">
          <h1 className="fw-semibold">
            My <span className="lam-text-accent">Latest Projects</span>
          </h1>
        </div>
      </div>
      <div className="row g-0 mt-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <ul id="portfolio-flters" className="list-unstyled d-flex">
              {categories.map((category, index) => (
                <li
                  key={index}
                  data-filter={
                    category === "All"
                      ? "*"
                      : `.filter-${category}`
                  }
                  className={`category ${
                    selectedCategory === category ? "filter-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        {filteredServices.map((items, index) => (
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
