import { PieChartSkillsNode } from "../ChartSkills/PieChartSkillNode";
import { PieChartSkillsCss } from "../ChartSkills/PieChartSkillsCss";
import { PieChartSkillsHtml } from "../ChartSkills/PieChartSkillsHtml";
import { PieChartSkillsJS } from "../ChartSkills/PieChartSkillsJS";
import { PieChartSkillsNext } from "../ChartSkills/PieChartSkillsNext";
import { PieChartSkillsReact } from "../ChartSkills/PieChartSkillsReact";
import { IconCloudDemo } from "../Icons-Cloud";

import Alison from "@/assets/Gemini_Generated_Image_mlv81cmlv81cmlv8 (1).png"

import { SectionTitle } from "../SectionTitle";
import { TechnologicalSkillsContainer } from "./styles";

interface TechnologicalSkillsProps {
  id: string
}

export function TechnologicalSkills({id}:TechnologicalSkillsProps) {
  return (
    <TechnologicalSkillsContainer id={id}>
      <SectionTitle index="03" kicker="Stack" title="Minhas Skills" />
      <div className="charts">
        <PieChartSkillsHtml />
        <PieChartSkillsCss />
        <PieChartSkillsJS />
        <PieChartSkillsReact />
        <PieChartSkillsNode />
        <PieChartSkillsNext />
      </div>
      <div className="flex justify-center items-center">
        <div className="cloud relative md:w-[550px]">
          <img className="w-full " src={Alison} alt="Pessoa segunrado algo com a mao" />
            <div className="absolute right-0 top-0 ">
              <IconCloudDemo />
            </div>
        </div>
      </div>
    </TechnologicalSkillsContainer>
  );
}
