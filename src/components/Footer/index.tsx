import rocketseat from "@/assets/rocketseat.jpeg"
import fmu from "@/assets/fmu.png"
import { ContainerFooter, IconsAnimationsRocketseat, IconsAnimationsUniFECAF } from "./styles"

export function Footer() {
  return (
    <ContainerFooter>
      <h2 className="w-full flex items-center justify-center mb-3">Instituiçõs de ensino</h2>
      <div className="w-full flex justify-center items-center gap-3">
        <IconsAnimationsRocketseat>
          <a href="https://www.rocketseat.com.br/" target="_blank">
            <img className="max-w-12 max-sm:w-10 rounded-xl cursor-pointer" src={rocketseat} alt="rocketseat" />
          </a> 
          <span className="text-violet-400">Rocketseat</span>
        </IconsAnimationsRocketseat>
        <IconsAnimationsUniFECAF>
          <a href="https://portal.fmu.br/" target="_blank">
            <img className="max-w-12 max-sm:w-10 rounded-xl cursor-pointer" src={fmu} alt="uniFECAF" />
          </a>
          <span className="text-blue-400">FMU</span>
        </IconsAnimationsUniFECAF>
      </div>
    </ContainerFooter>
  )
}