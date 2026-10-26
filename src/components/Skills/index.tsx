import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

import { SkilsContainer } from "./styles";

import { FaHtml5, FaReact, FaGithub } from "react-icons/fa6";
import { FaCss3Alt, FaFigma, FaNode, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoMdGitBranch } from "react-icons/io";
import { SiTypescript, SiVite, SiStyledcomponents, SiVitest, SiKnexdotjs, SiFastify, SiPrisma, SiNestjs } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";

interface Tech {
  name: string
  icon: IconType
  // Brand color, revealed on hover. Dark brands use white so they stay visible on the dark page.
  color: string
}

const frontEnd: Tech[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
  { name: "Styled", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
]

const backEnd: Tech[] = [
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Fastify", icon: SiFastify, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
  { name: "SQL", icon: TbSql, color: "#4479A1" },
  { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
  { name: "Knex", icon: SiKnexdotjs, color: "#E16426" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Git", icon: IoMdGitBranch, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
]

function Row({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% loop is seamless.
  return (
    <div className={`row${reverse ? " reverse" : ""}`}>
      <ul className="track">
        {[...items, ...items].map(({ name, icon: Icon, color }, index) => (
          <li
            key={`${name}-${index}`}
            style={{ "--brand": color } as CSSProperties}
            aria-hidden={index >= items.length}
          >
            <Icon className="icon" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <SkilsContainer aria-label="Tecnologias">
      <Row items={frontEnd} />
      <Row items={backEnd} reverse />
    </SkilsContainer>
  );
}
