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
               Déterminé et passionné par l'apprentissage, mon parcours atypique
               reflète ma volonté de suivre mes passions. Après des études
               scientifiques et huit ans dans la cuisine gastronomique, j'ai
               choisi de me reconvertir dans le développement web.
               <br /> <br />
               Grâce à ma formation chez OpenClassrooms et à mon
               auto-apprentissage, j'ai acquis des compétences solides en
               front-end et back-end. Je recherche actuellement une alternance
               pour préparer un Bachelor Développeur Web (Titre RNCP de niveau
               6) afin de continuer à me former et à développer mes compétences.
               <br /> <br />
               Mon objectif est de contribuer activement au développement web en
               apportant ma créativité et mon sens du détail.
            </p>
            <Collapse />
         </div>
      </section>
   )
}

export default Apropos
