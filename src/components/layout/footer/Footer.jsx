import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   return (
      <footer>
         <div className="logo">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedinIn} />
         </div>
         <h3>© 2023 - Pierre Schnell</h3>
      </footer>
   )
}

export default Footer
