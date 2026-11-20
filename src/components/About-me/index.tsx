import { FiPenTool, FiSettings } from "react-icons/fi";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { SectionTitle } from "../SectionTitle";
import { CERTIFICATES, LINKEDIN_FOLLOWERS, PROJECTS } from "@/config/profile";
import { AboutMeContainer } from "./styles";

// Each item comes from a real client project (see components/Projects/data.ts).
const solutions = [
  {
    title: "Agenda sem troca de mensagens",
    description: "O cliente escolhe o serviço, o profissional e o horário sozinho, a qualquer hora.",
    client: "Barbearia Lopes",
  },
  {
    title: "Pedidos organizados no WhatsApp",
    description: "Cardápio digital com busca e carrinho: o pedido chega pronto para o atendimento.",
    client: "Panda Beer",
  },
  {
    title: "Venda on-line com gestão própria",
    description: "Loja virtual com produtos, promoções e pedidos controlados em um painel.",
    client: "Pink Muller",
  },
  {
    title: "Orçamento rápido e profissional",
    description: "Clique nas peças do carro em 3D, monte os serviços e emita o orçamento em PDF.",
    client: "Funilaria HCM",
  },
]

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
        <SectionTitle index="01" kicker="Quem sou eu" title="Sobre mim" />
        <p>
          Sou desenvolvedor Full Stack e trabalho direto com donos de negócio:
          entendo o que está travando o dia a dia e transformo isso em um
          sistema simples de usar.
        </p>

        <h3 className="solves-title">O que eu resolvo</h3>
        <ul className="solves">
          {solutions.map(({ title, description, client }) => (
            <li key={client}>
              <strong>{title}</strong>
              <p>{description}</p>
              <span>{client}</span>
            </li>
          ))}
        </ul>

        <p>
          Cuido do projeto inteiro, da interface à API, ao banco de dados e à
          publicação, com React, Next.js, Node.js, NestJS e PostgreSQL. Hoje
          também me aprofundo em arquitetura de software e integrações com
          Inteligência Artificial.
        </p>
        <div className="separator-card">
          <div className="card">
            <strong>{LINKEDIN_FOLLOWERS}</strong>
            <span>Seguidores</span>
          </div>
          <div className="card">
            <strong>{PROJECTS}</strong>
            <span>Projetos</span>
          </div>
          <div className="card">
            <strong>{CERTIFICATES}</strong>
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
}
