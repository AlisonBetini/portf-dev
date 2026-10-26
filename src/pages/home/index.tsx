import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContentSection, HeroSection, HomeContainer } from "./styles";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/About-me";
import { TechnologicalSkills } from "@/components/Technological-skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MusicOrb } from "@/components/MusicOrb";
import DarkVeil from "@/components/DarkVeil";
import Hyperspeed from "@/components/Hyperspeed";
import Lightfall from "@/components/Lightfall";
import Prism from "@/components/Prism";


export function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <HeroSection>
        <div className="hyperspeed-bg" aria-hidden="true">
          <Hyperspeed
            interactive={false}
            tailColors={["#2F3BFF", "#4CC2E9", "#6750a2"]}
            headColors={["#ffffff", "#4CC2E9", "#2F3BFF"]}
            poleColors={["#2F3BFF"]}
          />
        </div>
        <Header />
        <Hero id="Home"/>
      </HeroSection>
      <ContentSection>
        <div className="bg-lightfall" aria-hidden="true">
          <Lightfall
            colors={["#4CC2E9", "#2F3BFF", "#ffffff"]}
            backgroundColor="#2F3BFF"
            holdToWarp={false}
            dpr={1}
          />
        </div>
        <div className="bg-prism" aria-hidden="true">
          <Prism
            animationType="rotate"
            colors={["#101499", "#2F3BFF", "#4CC2E9", "#E1F6FF"]}
            glow={1}
            scale={3.2}
            timeScale={0.4}
          />
        </div>
        <Skills />
        <HomeContainer>
          <AboutMe id="About" />
          <MusicOrb id="Soundtrack" />
          <TechnologicalSkills id="Skills" />
          <Projects id="Projects" />
          <Contact id="Contact"/>
          <Footer />
        </HomeContainer>
      </ContentSection>
    </div>
  )
}
