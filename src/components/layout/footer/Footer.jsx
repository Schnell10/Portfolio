import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
   return (
      <footer>
         <div className="logo">
            <a
               href="https://github.com/Schnell10"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
               href="https://www.linkedin.com/in/pierre-schnell-33a26a142"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
               href="https://drive.google.com/file/d/1dnuso0WGnN54pFVAhnvCUgkyoODPUA4J/view?usp=drive_link"
               target="_blank"
               rel="noopener noreferrer"
               title="CV"
            >
               <FontAwesomeIcon icon={faFile} />
            </a>
         </div>
         <h3>© 2024 - Pierre Schnell</h3>
      </footer>
   )
}

export default Footer
