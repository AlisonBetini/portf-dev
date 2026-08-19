import { ContactContainer } from "./styles";

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface ContactProps {
  id: string
}

export function Contact({id}:ContactProps) {
  return (
    <ContactContainer>
      <div className="flex justify-center items-center mb-3">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/IsidFKw66V8?si=MUoXV92VougQH661" 
        title="Apresentação Dev" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture; web-share">
      </iframe>
      </div>

      <div id={id} className="skills">
        <div className="borderOne"></div>
        <h2>Contato</h2>
        <div className="borderTwo"></div> 
      </div>
      <div className="mid">
        <div className="card-mid">
          <FaLinkedin className="linkedin" size={26} />
          <span>Linkedin</span>
          <a href="https://www.linkedin.com/in/alison-betini-334807199/" target="_blank">
            <strong>
              <span>Acessar</span> <GoArrowUpRight />
            </strong>
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="card">
          <FaWhatsapp className="whatsapp" size={26} />
          <span>WhatsApp</span>
          <a 
            href="https://wa.me/5519989760135?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>Acessar</span> <GoArrowUpRight />
            </strong>
          </a>
        </div>
        <div className="card">
          <FaGithub className="git" size={26} />
          <span>GitHub</span>
          <a href="https://github.com/AlisonBetini" target="_blank">
            <strong>
              <span>Acessar</span> <GoArrowUpRight />
            </strong>
          </a>
        </div>
      </div>
    </ContactContainer>
  )
}
