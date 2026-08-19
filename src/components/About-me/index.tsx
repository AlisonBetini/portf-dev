import { FiPenTool, FiSettings } from "react-icons/fi";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { AboutMeContainer } from "./styles";

interface AboutMeProps {
  id: string;
}

export function AboutMe({ id }: AboutMeProps) {
  return (
    <AboutMeContainer id={id}>
      <div className="skills">
        <div className="separator">
          <div className="line-1"></div>
          <span></span>
          <div className="line-1"></div>
          <span></span>
          <div className="line-1"></div>
          <span></span>
        </div>
        <div className="hard-skills">
          <div className="content">
            <FiSettings className="gear" size={32} />
            <strong>Web Site Developer</strong>
          </div>
          <div className="content">
            <FiPenTool className="pincel" size={32} />
            <strong>UI/UX Designer</strong>
          </div>
          <div className="content">
            <div className="separatorArrow">
              <MdOutlineKeyboardArrowLeft className="arrowLeft" size={32} />
              <MdKeyboardArrowRight className="arrowRight" size={32} />
            </div>
            <strong>Full Stack Engineer</strong>
          </div>
        </div>
        <div></div>
      </div>
      <div className="about">
        <h1>Sobre mim</h1>
        <p>
          Desenvolvedor Full Stack especializado em ecossistema JavaScript e
          TypeScript (React, Next.js, Node.js e NestJS), focado na criação de
          aplicações web modernas, escaláveis e de alta performance. Tenho
          experiência prática no desenvolvimento de produtos ponta a ponta:
          desde a construção de interfaces responsivas e otimizadas para SEO
          (com pontuação máxima em métricas de performance), até a estruturação
          de APIs REST escaláveis, modelagem de bancos de dados relacionais e
          uso de Docker.
        </p>
        <p>💻 Principais Tecnologias & Ferramentas</p>
        <p>
          Front-end: React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind
          CSS, HTML5/CSS3.
        </p>
        <p>Back-end: Node.js, NestJS, Express, APIs RESTful, Prisma ORM</p>
        <p>Banco de Dados & DevOps: PostgreSQL, Docker, Git/GitHub.</p>
        <p>
          Integrações com APIs (WhatsApp, serviços web) e automações. 🚀
          Atualmente aprofundando estudos em arquitetura de software e
          integrações com Inteligência Artificial para criação de soluções
          inteligentes.
        </p>
        <div className="separator-card">
          <div className="card">
            <strong>1041</strong>
            <span>Seguidores</span>
          </div>
          <div className="card">
            <strong>32</strong>
            <span>Projetos</span>
          </div>
          <div className="card">
            <strong>15</strong>
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
}
