import React from 'react'
import { Link } from 'react-router-dom'
import './page404.scss'

const Page404 = () => {
   return (
      <div className="main-404">
         <h2>404</h2>
         <p>
            Oups! La page que<span> vous demandez n'existe pas.</span>
         </p>
         <Link to="/Portfolio">Retourner sur la page d'accueil</Link>
      </div>
   )
}

export default Page404
