import type { CSSProperties } from "react";

import { ContactContainer } from "./styles";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import { SectionTitle } from "../SectionTitle";

interface ContactProps {
  id: string
}

const channels = [
  {
    name: "LinkedIn",
    handle: "alison-betini",
    href: "https://www.linkedin.com/in/alison-betini-334807199/",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "WhatsApp",
    handle: "+55 19 98976-0135",
    href: "https://wa.me/5519989760135?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar!",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    name: "GitHub",
    handle: "AlisonBetini",
    href: "https://github.com/AlisonBetini",
    icon: FaGithub,
    color: "#FFFFFF",
  },
]

export function Contact({ id }: ContactProps) {
  return (
    <ContactContainer>
      <div className="video">
        <span className="label">Apresentação</span>
        <iframe
          src="https://www.youtube.com/embed/IsidFKw66V8?si=MUoXV92VougQH661"
          title="Apresentação Dev"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>

      <SectionTitle id={id} index="05" kicker="Conecte-se" title="Contato" />

      <div className="contact">
        {channels.map(({ name, handle, href, icon: Icon, color }, index) => (
          <a
            key={name}
            className="card"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--brand": color } as CSSProperties}
          >
            <span className="index">{String(index + 1).padStart(2, "0")}</span>
            <Icon className="icon" size={28} />
            <strong>{name}</strong>
            <span className="handle">{handle}</span>
            <span className="cta">
              Acessar <GoArrowUpRight />
            </span>
          </a>
        ))}
      </div>
    </ContactContainer>
  )
}
