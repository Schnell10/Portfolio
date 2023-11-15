import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import datas from '../../datas.json'
import './projet.scss'
import Collapse from '../../components/collapse/Collapse'

const Projet = () => {
   //On utilise use effect pour mettre le scroll sur le haut de notre page lorsqu'on change de page
   useEffect(() => {
      window.scrollTo(0, 0)
   }, []) // Le deuxième paramètre vide signifie que cela ne s'exécute qu'une seule fois après le montage du composant

   const { id } = useParams() // Utilisez useParams pour extraire l'ID de l'URL

   const dataProjet = datas.find((data) => data.id === id)

   if (!dataProjet) {
      //Si dataProjet = false c'est que l'id de notre url correspond à aucun id d'un projet donc on est redirigé vers la page 404
      return <Navigate to="/Portfolio/page-404" replace={true} />
   }

   return (
      <div className="projet">
         <div className="container-data">
            <h2>{dataProjet.title}</h2>
            <p>{dataProjet.description}</p>
            <div className="tags">
               {dataProjet.tags.map((tag, index) => (
                  <div key={`${tag}-${index}`}>{tag}</div>
               ))}
            </div>
         </div>
         <div className="container-img-site">
            <img
               src={dataProjet.cover}
               alt="visuel du site"
               className="img-site"
            />
            <div className="link">
               {dataProjet.linkWebsite && (
                  <a
                     href={dataProjet.linkWebsite}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Site
                  </a>
               )}
               <a
                  href={dataProjet.github}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Github
               </a>
            </div>
         </div>
         <Collapse descriptionCollapse={dataProjet.descriptionCollapse} />
      </div>
   )
}

export default Projet
