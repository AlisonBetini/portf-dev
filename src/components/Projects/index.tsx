import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { ProjectsContainer } from "./styles";

import typeWeather from "../../assets/typeweather.png";
import foodExplorer from "../../assets/foodExplorer.png";
import vendaSeusProdutos from "../../assets/Venda seus produtos.png";
import redesSociais from "../../assets/redesSociais.png";
import cbpa from "../../assets/cbpa.png";
import ElectricBorder from "../ElectricBorder";
import { SectionTitle } from "../SectionTitle";

interface ProjectsProps {
  id: string;
}

const projects = [
  {
    name: "Canil Terras do Barão",
    image: cbpa,
    github: "https://github.com/AlisonBetini/Canil-Terras-do-Bar-o",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7490005737885302784/",
  },
  {
    name: "FoodExplorer",
    image: foodExplorer,
    github: "https://github.com/AlisonMaciel/foodExplorer",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7348426071400194049/",
  },
  {
    name: "TypeWeather",
    image: typeWeather,
    github: "https://github.com/AlisonMaciel/TYPEWEATHER",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7386516700218761217/?originTrackingId=HLdrvWYUDrN%2FLiVm%2BvM3aQ%3D%3D",
  },
  {
    name: "Projeto em Next",
    image: vendaSeusProdutos,
    github: "https://github.com/AlisonMaciel/SITE-BLOG",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7386784158490189824/?originTrackingId=gRIB7Yb6CpgzHVyYzcPTYA%3D%3D",
  },
  {
    name: "Redes Sociais",
    image: redesSociais,
    github: "https://github.com/AlisonMaciel/fundamentos-reactjs",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7355699914862960642/",
  },
];

// Alternate the electric border between the two neon tones of the theme.
const borderColors = ["#4CC2E9", "#2F3BFF"];

export function Projects({ id }: ProjectsProps) {
  return (
    <ProjectsContainer id={id}>
      <SectionTitle index="04" kicker="Portfólio" title="Projetos" />
      <div className="project">
        {projects.map((project, index) => (
          <ElectricBorder
            key={project.name}
            color={borderColors[index % borderColors.length]}
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 4 }}
          >
            <div className="card">
              <img src={project.image} alt={project.name} />
              <div className="info">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.name}</strong>
                <div className="links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} no GitHub`}>
                    <FaGithub size={18} />
                  </a>
                  <a href={project.linkedin} target="_blank" rel="noreferrer" aria-label={`${project.name} no LinkedIn`}>
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </ProjectsContainer>
  );
}
