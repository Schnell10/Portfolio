import React from 'react'
import './portfolio.scss'
import Gallery from './gallery/Gallery'

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h2>Mes Réalisations</h2>
         <p>
            Tout au long de ma formation chez OpenClassrooms et à travers mes
            projets personnels, j'ai acquis une solide expérience en
            développement front-end et back-end. J'ai travaillé avec des
            technologies comme HTML, CSS, JavaScript, React, et Node.js, et
            utilisé des outils tels que Chrome DevTools, Wave et Lighthouse pour
            l'optimisation et le débogage. Voici un aperçu de mes projets,
            incluant ceux réalisés pendant ma formation et ceux que j'ai
            entrepris de manière autonome pour approfondir mes compétences.
         </p>
         <Gallery />
      </section>
   )
}

export default Portfolio
