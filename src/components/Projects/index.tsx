import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { ProjectsContainer } from "./styles";

import typeWeather from "../../assets/typeweather.png";
import foodExplorer from "../../assets/foodExplorer.png";
import vendaSeusProdutos from "../../assets/Venda seus produtos.png";
import redesSociais from "../../assets/redesSociais.png";
import cbpa from "../../assets/cbpa.png";
import ElectricBorder from "../ElectricBorder";

interface ProjectsProps {
  id: string;
}

export function Projects({ id }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <div id={id} className="skills">
        <div className="borderOne"></div>
        <h2>Projetos</h2>
        <div className="borderTwo"></div>
      </div>
      <div className="project">
        <ElectricBorder
          color="#d270c5"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="card">
            <img src={cbpa} alt="" />
            <div>
              <span>RocketMovies</span>
              <div className="separator">
                <a
                  href="https://github.com/AlisonBetini/Canil-Terras-do-Bar-o"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7490005737885302784/"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#b7d5d7"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="card">
            <img src={foodExplorer} alt="" />
            <div>
              <span>FoodExplorer</span>
              <div className="separator">
                <a
                  href="https://github.com/AlisonMaciel/foodExplorer"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7348426071400194049/"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#6ccad0"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="card">
            <img src={typeWeather} alt="" />
            <div>
              <span>TypeWeather</span>
              <div className="separator">
                <a
                  href="https://github.com/AlisonMaciel/TYPEWEATHER"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7386516700218761217/?originTrackingId=HLdrvWYUDrN%2FLiVm%2BvM3aQ%3D%3D"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#8464dd"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="card">
            <img src={vendaSeusProdutos} alt="" />
            <div>
              <span>Projeto em Next</span>
              <div className="separator">
                <a
                  href="https://github.com/AlisonMaciel/SITE-BLOG"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7386784158490189824/?originTrackingId=gRIB7Yb6CpgzHVyYzcPTYA%3D%3D"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#eaaeae"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="card">
            <img src={redesSociais} alt="" />
            <div>
              <span>Redes Sociais</span>
              <div className="separator">
                <a
                  href="https://github.com/AlisonMaciel/fundamentos-reactjs"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7355699914862960642/"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </ElectricBorder>
      </div>
    </ProjectsContainer>
  );
}
