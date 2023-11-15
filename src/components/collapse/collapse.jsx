import React, { useState } from 'react'
import arrowOpen from '../../assets/logo/arrow-collapse.png'
import './collapse.scss'

const Collapse = ({ descriptionCollapse }) => {
   // Utilisation de l'état local (useState) pour gérer l'ouverture ou la fermeture du Collapse
   const [open, setOpen] = useState(false)

   // Fonction toggle pour basculer l'état ouvert/fermé du Collapse
   const toggle = () => {
      setOpen(!open)
   }

   return (
      <div className={`collapse ${open ? 'active' : ''}`}>
         <button onClick={toggle}>
            <p>Description</p>
            <img
               src={arrowOpen}
               alt={`flêche pour ${open ? 'fermer' : 'ouvrir'} le collapse`}
            />
         </button>
         <div className={`collapse__toggle ${open ? 'active' : ''}`}>
            {descriptionCollapse ? (
               <p>{descriptionCollapse}</p>
            ) : (
               <p>
                  Passionné par la découverte et l'apprentissage, mon parcours
                  atypique reflète ma détermination à suivre mes passions. Après
                  des études scientifiques, j'ai exploré le monde de la cuisine
                  gastronomique pendant cinq années, cultivant ainsi ma
                  créativité et mon sens du détail.
                  <br /> <br />
                  Cependant, l'appel du domaine scientifique n'a jamais cessé de
                  me captiver. C'est pourquoi j'ai décidé de m'engager dans une
                  reconversion vers le développement web. Fort de ma formation
                  chez OpenClassrooms, associée à une autodidaxie constante, je
                  suis désormais prêt à relever les défis du monde numérique.
                  <br /> <br />
                  Mon objectif est de contribuer activement au monde du
                  développement web en apportant une perspective enrichissante
                  et une passion inébranlable pour l'innovation.
               </p>
            )}
         </div>
      </div>
   )
}

export default Collapse
