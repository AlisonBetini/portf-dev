import enigma from "@/assets/projects/enigma.jpg";
import funilaria from "@/assets/projects/funilaria.jpg";
import barbearia from "@/assets/projects/barbearia.jpg";
import panda from "@/assets/projects/panda.jpg";
import perfumaria from "@/assets/projects/perfumaria.jpg";
import canil from "@/assets/projects/canil.jpg";
import barbeariaEspaco from "@/assets/projects/barbearia-espaco.jpg";
import pandaLogo from "@/assets/projects/panda-logo.webp";
import pinkMullerLogo from "@/assets/projects/pink-muller-logo.png";
import typeWeather from "@/assets/typeweather.png";
import foodExplorer from "@/assets/foodExplorer.png";
import vendaSeusProdutos from "@/assets/Venda seus produtos.png";
import redesSociais from "@/assets/redesSociais.png";

// Evidence that the client is a real business. Follower counts are updated by hand (last: 2026-11-08).
export interface Business {
  // Defaults to "Empresa real".
  label?: string
  name: string
  // Logos must not be cropped; photos fill the thumbnail.
  thumbContain?: boolean
  detail: string
  thumb?: string
  thumbAlt?: string
  href?: string
  linkLabel?: string
}

export interface Project {
  name: string
  business?: Business
  // Shown instead of the link when the system is not public.
  accessNote?: string
  description: string
  tags: string[]
  result: string
  image?: string
  // Omitted while there is no public address yet.
  url?: string
  // Omitted when the repository is private.
  repo?: string
}

export interface StudyProject {
  name: string
  image: string
  repo: string
  linkedin: string
}

export const deployed: Project[] = [
  {
    name: "Enigma Diário",
    description: "Desafio diário de League of Legends para jogar entre amigos, com ranking em party e duelos X1.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Three.js"],
    result: "8 modos diários e 173 campeões",
    image: enigma,
    url: "https://enigmadiario.com.br",
    business: {
      label: "No ar",
      name: "enigmadiario.com.br",
      detail: "Projeto próprio, público e gratuito",
    },
  },
  {
    name: "Funilaria HCM",
    description: "Sistema interno de orçamento em 3D: clique nas peças do carro, monte os serviços e emita o PDF.",
    tags: ["React", "TypeScript", "Three.js", "Express", "SQLite"],
    result: "Do clique na peça ao orçamento em PDF",
    image: funilaria,
    accessNote: "Acesso restrito ao dono",
    business: {
      name: "HCM Funilaria e Pintura",
      detail: "Limeira/SP · implantado para uso do dono",
    },
  },
]

export const inProgress: Project[] = [
  {
    name: "Barbearia Lopes",
    description: "Agendamento on-line por serviço, barbeiro e horário, com loja, cardápio e plano VIP.",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Docker"],
    result: "Pix via Asaas e Google Agenda",
    image: barbearia,
    business: {
      name: "Barbearia Lopes",
      detail: "Foto real do espaço · +3,5 mil seguidores",
      thumb: barbeariaEspaco,
      thumbAlt: "Salão da Barbearia Lopes, com cadeiras e a placa da marca na parede",
      href: "https://www.instagram.com/barbearialopesss_/",
      linkLabel: "@barbearialopesss_",
    },
  },
  {
    name: "Panda Beer",
    description: "Cardápio digital com busca e carrinho, além de painel para o lojista gerenciar os itens.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    result: "Pedido direto no WhatsApp",
    image: panda,
    business: {
      name: "Panda Beer",
      detail: "+13 mil seguidores no Instagram",
      thumb: pandaLogo,
      thumbAlt: "Logo da Panda Beer",
      href: "https://www.instagram.com/pandabeer.oficial/",
      linkLabel: "@pandabeer.oficial",
    },
  },
  {
    name: "Pink Muller",
    description: "Loja virtual de perfumes, maquiagem e acessórios, com promoções, combos e lançamentos.",
    tags: ["Next.js", "Three.js", "Zustand", "Tailwind"],
    result: "Vitrine em 3D e painel administrativo",
    image: perfumaria,
    business: {
      name: "Pink Muller",
      detail: "Limeira/SP · +6,6 mil seguidores no Instagram",
      thumb: pinkMullerLogo,
      thumbContain: true,
      thumbAlt: "Logo da Pink Muller",
      href: "https://www.instagram.com/pink_muller_makeup/",
      linkLabel: "@pink_muller_makeup",
    },
  },
]

export const projects: Project[] = [
  {
    name: "Canil Terras do Barão",
    description: "Landing page premium para um canil de pastores-alemães, com formulário de contato.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    result: "100/100 no Speed Insights",
    image: canil,
    url: "https://canil-terras-do-bar-o.vercel.app",
    repo: "https://github.com/AlisonBetini/Canil-Terras-do-Bar-o",
  },
  {
    name: "WebHook Inspector",
    description: "Captura, inspeciona e gerencia requisições de webhooks em tempo real.",
    tags: ["Fastify", "React", "PostgreSQL", "Drizzle", "Zod"],
    result: "API documentada com Scalar",
    repo: "https://github.com/AlisonMaciel/webhook-inspector",
  },
]

export const studies: StudyProject[] = [
  {
    name: "TypeWeather",
    image: typeWeather,
    repo: "https://github.com/AlisonMaciel/TYPEWEATHER",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7386516700218761217/?originTrackingId=HLdrvWYUDrN%2FLiVm%2BvM3aQ%3D%3D",
  },
  {
    name: "FoodExplorer",
    image: foodExplorer,
    repo: "https://github.com/AlisonMaciel/foodExplorer",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7348426071400194049/",
  },
  {
    name: "Projeto em Next",
    image: vendaSeusProdutos,
    repo: "https://github.com/AlisonMaciel/SITE-BLOG",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7386784158490189824/?originTrackingId=gRIB7Yb6CpgzHVyYzcPTYA%3D%3D",
  },
  {
    name: "Redes Sociais",
    image: redesSociais,
    repo: "https://github.com/AlisonMaciel/fundamentos-reactjs",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7355699914862960642/",
  },
]
