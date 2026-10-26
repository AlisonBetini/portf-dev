import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";

import { BiMenuAltRight } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

import  "../../styles/index.css"

import { MenuPanel } from "./styles";
import { useState } from "react";
import { socials } from "@/config/socials";

const links = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "Sobre" },
  { href: "#Skills", label: "Habilidades" },
  { href: "#Projects", label: "Projetos" },
  { href: "#Contact", label: "Contato" },
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          aria-label="Abrir menu"
          className="bg-transparent border-0 text-white cursor-pointer">
          <BiMenuAltRight className="text-2xl"/>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88%] overflow-y-auto border-0 bg-transparent p-0 shadow-none"
      >
        <MenuPanel>
          <div className="grid-lines" aria-hidden="true" />

          <header>
            <span className="kicker">Here and now</span>
            <SheetTitle asChild>
              <h2>Alison</h2>
            </SheetTitle>
            <SheetDescription asChild>
              <p>Software Developer</p>
            </SheetDescription>
          </header>

          <nav aria-label="Menu principal">
            <ul>
              {links.map(({ href, label }, index) => (
                <li key={href} style={{ animationDelay: `${0.12 + index * 0.06}s` }}>
                  <a href={href} onClick={() => setIsOpen(false)}>
                    <span className="index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="label">{label}</span>
                    <GoArrowUpRight className="arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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

          <footer>
            <ul className="socials">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="copy">Built for the future</span>
          </footer>
        </MenuPanel>
      </SheetContent>
    </Sheet>
  )
}
