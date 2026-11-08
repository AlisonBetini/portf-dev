import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

import { IconCloudDemo } from "../Icons-Cloud";
import { SectionTitle } from "../SectionTitle";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import Alison from "@/assets/Retrato Futurista com Mão Iluminada.png"

import { TechnologicalSkillsContainer } from "./styles";

interface TechnologicalSkillsProps {
  id: string
}

interface Experience {
  name: string
  months: number
  icon: IconType
  color: string
}

// Time is the only figure here: self-rated "percent of a skill" has no real meaning.
const experience: Experience[] = [
  { name: "TypeScript", months: 15, icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", months: 14, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", months: 14, icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node", months: 13, icon: FaNode, color: "#339933" },
  { name: "React", months: 12, icon: FaReact, color: "#61DAFB" },
  { name: "Next", months: 7, icon: RiNextjsFill, color: "#FFFFFF" },
]

const alsoUse = ["NestJS", "Prisma", "PostgreSQL", "Docker", "Tailwind", "Git"]

const SCALE_MONTHS = 18
const scaleTicks = ["0", "6 m", "1 ano", "1 a 6 m"]

function formatDuration(months: number) {
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts = []
  if (years) parts.push(years === 1 ? "1 ano" : `${years} anos`)
  if (rest) parts.push(rest === 1 ? "1 mês" : `${rest} meses`)
  return parts.join(" e ")
}

export function TechnologicalSkills({ id }: TechnologicalSkillsProps) {
  const { ref, revealed } = useRevealOnScroll<HTMLDivElement>()

  return (
    <TechnologicalSkillsContainer id={id}>
      <SectionTitle index="03" kicker="Stack" title="Minhas Skills" />

      <div className="layout">
        <div ref={ref} className={`panel${revealed ? " revealed" : ""}`}>
          <h3>Tempo de experiência</h3>

          <ul className="rows">
            {experience.map(({ name, months, icon: Icon, color }, index) => (
              <li
                key={name}
                style={{
                  "--brand": color,
                  "--fill": months / SCALE_MONTHS,
                  "--order": index,
                } as CSSProperties}
              >
                <Icon className="icon" aria-hidden="true" />
                <span className="name">{name}</span>
                <span className="bar" aria-hidden="true"><span /></span>
                <span className="time">{formatDuration(months)}</span>
              </li>
            ))}
          </ul>

          <div className="scale" aria-hidden="true">
            {scaleTicks.map(tick => <span key={tick}>{tick}</span>)}
          </div>

          <div className="also">
            <span>Também trabalho com</span>
            <ul>
              {alsoUse.map(tool => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        </div>

        <div className="stage">
          <img className="person" src={Alison} alt="Alison com a mão estendida, segurando uma nuvem de tecnologias" />
          <span className="beam" aria-hidden="true" />
          <span className="pad" aria-hidden="true" />
          <div className="cloud"><IconCloudDemo /></div>
        </div>
      </div>
    </TechnologicalSkillsContainer>
  );
}
