import rocketseat from "@/assets/rocketseat.jpeg"
import fmu from "@/assets/fmu.png"
import { ContainerFooter } from "./styles"

const institutions = [
  { name: "Rocketseat", href: "https://www.rocketseat.com.br/", logo: rocketseat },
  { name: "FMU", href: "https://portal.fmu.br/", logo: fmu },
]

export function Footer() {
  return (
    <ContainerFooter>
      <span className="kicker">Instituições de ensino</span>
      <div className="institutions">
        {institutions.map(({ name, href, logo }) => (
          <a key={name} className="card" href={href} target="_blank" rel="noreferrer">
            <img src={logo} alt={name} />
            <span>{name}</span>
          </a>
        ))}
      </div>
      <p className="copy">© {new Date().getFullYear()} Alison Maciel · Built for the future</p>
    </ContainerFooter>
  )
}
