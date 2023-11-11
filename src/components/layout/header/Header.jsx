import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './header.scss'
import Nav from './nav/Nav'

const Header = () => {
   return (
      <header>
         <div className="header-left">
            <img
               src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
               alt="portrait"
            />
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
            </div>
         </div>
         <Nav />
      </header>
   )
}

export default Header
