import React from 'react'
import './competences.scss'
import imageMern from '../../assets/images/mern-img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faHtml5,
   faCss3Alt,
   faSass,
   faJs,
   faGithub,
   faFigma,
   faTrello,
   faBootstrap,
} from '@fortawesome/free-brands-svg-icons'

const Competences = () => {
   return (
      <section id="competences">
         <h2>Mes compétences</h2>
         <div className="competences-container">
            <div className="mern">
               <h3>MERN Stack</h3>
               <img
                  src={imageMern}
                  alt="schéma des logo express, node.js, mongoDb et React"
               />
            </div>
            <div className="language">
               <h3>Autre Languages /Outils</h3>
               <div className="icone-container">
                  <FontAwesomeIcon icon={faHtml5} />
                  <FontAwesomeIcon icon={faCss3Alt} />{' '}
                  <FontAwesomeIcon icon={faSass} />
                  <FontAwesomeIcon icon={faJs} />
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faFigma} />
                  <FontAwesomeIcon icon={faTrello} />
                  <FontAwesomeIcon icon={faBootstrap} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Competences
