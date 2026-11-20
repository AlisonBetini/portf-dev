import type { CSSProperties } from "react";
import { FaGithub, FaLinkedin, FaLock } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { TbWebhook } from "react-icons/tb";

import { SectionTitle } from "../SectionTitle";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import { deployed, inProgress, projects, studies, type Project, type StudyProject } from "./data";
import { ProjectGroup, ProjectsContainer } from "./styles";

type Status = "live" | "building" | "next" | "none"

const statusLabels: Record<Status, string> = {
  live: "Implantado",
  building: "Em implantação",
  next: "Próxima implantação",
  none: "",
}

interface ProjectCardProps {
  project: Project
  number: number
  status: Status
}

function ProjectCard({ project, number, status }: ProjectCardProps) {
  const { ref, revealed } = useRevealOnScroll<HTMLElement>()
  const { name, description, tags, result, image, url, repo, business, accessNote, upNext } = project
  const badge: Status = status === "building" && upNext ? "next" : status

  return (
    <article
      ref={ref}
      className={`project-card ${revealed ? "revealed" : "pending"}`}
      // Cards in the same row start one after the other.
      style={{ "--delay": `${(number % 3) * 0.14}s` } as CSSProperties}
    >
      <div className="frame" aria-hidden="true">
        <span className="arc" />
        <span className="orbit" />
      </div>

      <div className="media">
        {image ? (
          <img src={image} alt={`Tela do projeto ${name}`} loading="lazy" />
        ) : (
          <div className="placeholder" aria-hidden="true">
            <TbWebhook />
          </div>
        )}
        <span className="burst" aria-hidden="true" />
      </div>

      <div className="content">
        {badge !== "none" && <span className={`status ${badge}`}>{statusLabels[badge]}</span>}

        <div className="heading">
          <span className="crest" aria-hidden="true">{String(number).padStart(2, "0")}</span>
          <h4>{name}</h4>
        </div>

        <p>{description}</p>

        <ul className="tags">
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>

        <div className="result">
          <span>Destaque</span>
          <strong>{result}</strong>
        </div>

        {business && (
          <div className="business">
            {business.thumb && (
              <img
                className={business.thumbContain ? "contain" : undefined}
                src={business.thumb}
                alt={business.thumbAlt}
                loading="lazy"
              />
            )}
            <div className="business-info">
              <span className="business-label"><MdVerified /> {business.label ?? "Empresa real"}</span>
              <strong>{business.name}</strong>
              <span className="business-detail">{business.detail}</span>
              {business.href && (
                <a href={business.href} target="_blank" rel="noreferrer">
                  {business.linkLabel} <GoArrowUpRight />
                </a>
              )}
            </div>
          </div>
        )}

        <div className="actions">
          {url && (
            <a className="accept" href={url} target="_blank" rel="noreferrer">
              <span>Ver projeto <GoArrowUpRight /></span>
            </a>
          )}
          {!url && status !== "none" && (
            <span className="accept off">
              <span>{accessNote ? <><FaLock /> {accessNote}</> : upNext ? "Lançamento em breve" : "Em breve"}</span>
            </span>
          )}
          {repo ? (
            <a className="decline" href={repo} target="_blank" rel="noreferrer">
              <FaGithub /> Código
            </a>
          ) : (
            <span className="decline off"><FaLock /> Código privado</span>
          )}
        </div>
      </div>
    </article>
  )
}

function StudyCard({ name, image, repo, linkedin }: StudyProject) {
  return (
    <article className="study-card">
      <img src={image} alt={`Tela do projeto ${name}`} loading="lazy" />
      <div>
        <strong>{name}</strong>
        <span className="links">
          <a href={repo} target="_blank" rel="noreferrer" aria-label={`Código de ${name} no GitHub`}><FaGithub /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label={`${name} no LinkedIn`}><FaLinkedin /></a>
        </span>
      </div>
    </article>
  )
}

interface ProjectsProps {
  id: string
}

export function Projects({ id }: ProjectsProps) {
  // Numbering continues across groups.
  const inProgressStart = deployed.length + 1
  const projectsStart = inProgressStart + inProgress.length

  return (
    <ProjectsContainer id={id}>
      <SectionTitle index="04" kicker="Portfólio" title="Projetos" />

      <ProjectGroup>
        <h3>Implantados</h3>
        <div className={`cards ${deployed.length === 3 ? "three" : "two"}`}>
          {deployed.map((project, index) => (
            <ProjectCard key={project.name} project={project} number={index + 1} status="live" />
          ))}
        </div>
      </ProjectGroup>

      <ProjectGroup>
        <h3>Em implantação</h3>
        <div className={`cards ${inProgress.length === 3 ? "three" : "two"}`}>
          {inProgress.map((project, index) => (
            <ProjectCard key={project.name} project={project} number={inProgressStart + index} status="building" />
          ))}
        </div>
      </ProjectGroup>

      <ProjectGroup>
        <h3>Projetos</h3>
        <div className="cards two">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} number={projectsStart + index} status="none" />
          ))}
        </div>
      </ProjectGroup>

      <ProjectGroup>
        <h3>Estudos</h3>
        <div className="cards four">
          {studies.map(study => <StudyCard key={study.name} {...study} />)}
        </div>
      </ProjectGroup>
    </ProjectsContainer>
  )
}
