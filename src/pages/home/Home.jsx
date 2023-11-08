import React from 'react'
import './home.scss'
import Accueil from '../../components/accueil/Accueil'
import Competences from '../../components/competences/Competences'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import Apropos from '../../components/a-propos/a-propos'

const Home = () => {
   return (
      <div>
         <Accueil />
         <Apropos />
         <Competences />
         <Portfolio />
         <Contact />
      </div>
   )
}

export default Home
