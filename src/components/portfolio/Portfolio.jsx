import React from 'react'
import './portfolio.scss'
import Gallery from './gallery/Gallery'

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h2>Mes Réalisations</h2>
         <p>
            Pendant ma formation de développeuse web chez OpenClassrooms, j'ai
            réalisé divers projets qui ont renforcé mes compétences en
            développement front-end et back-end. J'ai utilisé des technologies
            telles que HTML, CSS, JavaScript, React, Node.js, et j'ai acquis de
            l'expérience en optimisation et en débogage grâce à des outils comme
            Chrome DevTools, Wave et Lighthouse.
         </p>
         <Gallery />
      </section>
   )
}

export default Portfolio
