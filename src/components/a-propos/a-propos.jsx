import React from 'react'
import './a-propos.scss'
import photoId from '../../assets/images/photo-cv.webp'
import Collapse from '../collapse/Collapse'

const Apropos = () => {
   return (
      <section id="apropos">
         <h2>Présentation</h2>
         <div>
            <img className="photo-id" src={photoId} alt="portrait d'identité" />
            <p className="initial-text">
               Passionné par la découverte et l'apprentissage, mon parcours
               atypique reflète ma détermination à suivre mes passions. Après
               des études scientifiques, j'ai exploré le monde de la cuisine
               gastronomique pendant cinq années, cultivant ainsi ma créativité
               et mon sens du détail.
               <br /> <br />
               Cependant, l'appel du domaine scientifique n'a jamais cessé de me
               captiver. C'est pourquoi j'ai décidé de m'engager dans une
               reconversion vers le développement web. Fort de ma formation chez
               OpenClassrooms, associée à une autodidaxie constante, je suis
               désormais prêt à relever les défis du monde numérique.
               <br /> <br />
               Mon objectif est de contribuer activement au monde du
               développement web en apportant une perspective enrichissante et
               une passion inébranlable pour l'innovation.
            </p>
            <Collapse />
         </div>
      </section>
   )
}

export default Apropos
