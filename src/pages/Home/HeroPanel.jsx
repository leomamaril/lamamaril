import { Section } from "../../components/container";
import { projectsData } from "../../data/projectsData";
import { HighLightedProjectsCard } from "../../components/card";
export default function HeroPanel() {
  return (
    <Section id="hero-panel">
      <div className="position-relative overflow-hidden lam-hl-card-h">
        <div className="h-100 d-flex align-items-center lam-hl-card-anim">
          {projectsData.map((items, index) => (
            <HighLightedProjectsCard
              key={`original-${index}`}
              image={items.image}
              title={items.title}
              onclick={() => handleCardClick(items.title)}
            />
          ))}

          {projectsData.map((items, index) => (
            <HighLightedProjectsCard
              key={`duplicated-${index}`}
              image={items.image}
              title={items.title}
              onclick={() => handleCardClick(items.title)}
            />
          ))}
         
        </div>
      </div>
    </Section>
  );
}
