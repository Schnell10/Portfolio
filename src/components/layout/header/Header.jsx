import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import photoId from '../../../assets/images/photo-id.webp'

import './header.scss'
import Nav from './nav/Nav'

const Header = () => {
   return (
      <header>
         <div className="header-left">
            <img src={photoId} alt="portrait" />
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
                  href="https://drive.google.com/file/d/1pMIgv1oTT0DM7KNWHSfd5vqKoFXYxDpz/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CV"
               >
                  <FontAwesomeIcon icon={faFile} />
               </a>
            </div>
         </div>
         <Nav />
      </header>
   )
}

export default Header
