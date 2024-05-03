import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link as ScrollLink } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
   const location = useLocation()

   return (
      <nav>
         <ul>
            <li>
               {location.pathname === '/' ? (
                  <ScrollLink
                     to="accueil"
                     // Activation du mode espion pour mettre à jour automatiquement le lien actif en fonction du défilement
                     spy={true}
                     // Défilement en douceur activé pour une expérience utilisateur plus agréable
                     smooth={true}
                     offset={-50}
                     // Durée du défilement en millisecondes (500 millisecondes ici)
                     duration={500}
                     className="first-nav"
                  >
                     Accueil
                  </ScrollLink>
               ) : (
                  <HashLink to="/#accueil" className="first-nav">
                     Accueil
                  </HashLink>
               )}
            </li>
            <li>
               {location.pathname === '/' ? (
                  <ScrollLink
                     to="apropos"
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration={500}
                  >
                     À Propos
                  </ScrollLink>
               ) : (
                  <HashLink to="/#apropos">À Propos</HashLink>
               )}
            </li>
            <li>
               {location.pathname === '/' ? (
                  <ScrollLink
                     to="competences"
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration={500}
                  >
                     Compétences
                  </ScrollLink>
               ) : (
                  <HashLink to="/#competences">Compétences</HashLink>
               )}
            </li>
            <li>
               {location.pathname === '/' ? (
                  <ScrollLink
                     to="portfolio"
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration={500}
                  >
                     Portfolio
                  </ScrollLink>
               ) : (
                  <HashLink to="/#portfolio">Portfolio</HashLink>
               )}
            </li>
            <li>
               {location.pathname === '/' ? (
                  <ScrollLink
                     to="contact"
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration={500}
                     className="last-nav"
                  >
                     Me Contacter
                  </ScrollLink>
               ) : (
                  <HashLink to="/#contact" className="last-nav">
                     Me Contacter
                  </HashLink>
               )}
            </li>
         </ul>
      </nav>
   )
}

export default Nav
