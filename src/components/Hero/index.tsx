import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

import { HeroContainer, Button } from "./styles";

import dev from "../../assets/Retrato futurista com headset VR luminoso.png"

interface HeroProps {
  id: string
}

const socials = [
  { label: "GitHub", href: "https://github.com/AlisonBetini", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alison-betini-334807199/", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/5519989760135", icon: FaWhatsapp },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=IsidFKw66V8", icon: FaYoutube },
]

export function Hero({ id }: HeroProps) {
  return (
    <HeroContainer id={id}>
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="intro">
        <span className="kicker">Here and now</span>
        <h1>Alison</h1>
        <h2>Software Developer</h2>
        <p>
          Construo aplicações web modernas, escaláveis e de alta performance com
          React, Next.js, Node.js e NestJS.
        </p>
        <div className="myResume">
          <Button as="a" href="#Projects">Tem um projeto?</Button>
          <Button as="a" href="#About" className="ghost">Meu resumo</Button>
        </div>
      </div>

      <div className="hero">
        <div className="portrait">
          <img className="dev" src={dev} alt="Alison usando um visor de realidade virtual" />
          <span className="tag tag-top">Full stack engineer</span>
          <span className="tag tag-bottom">No limits</span>
        </div>
        <div className="panels">
          <div>
            <strong>Tecnologia</strong>
            <span>React, Next.js, Node.js, NestJS e PostgreSQL.</span>
          </div>
          <div>
            <strong>Inovação</strong>
            <span>Integrações com IA e automações inteligentes.</span>
          </div>
        </div>
      </div>

      <ul className="socials">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={14} />
            </a>
          </li>
        ))}
      </ul>
    </HeroContainer>
  )
}
