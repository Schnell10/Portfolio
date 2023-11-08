import React from 'react'

const Card = ({ cover, title }) => {
   return (
      <div className="gallery__card">
         <div className="gallery__card--gradient">
            <img
               src="https://raw.githubusercontent.com/Schnell10/OCProjet6_Crez-une-application-web-de-location-immobiliere-avec-React/gh-pages/static/media/image-banner-a-propos.9b95ada7a30d67f2fb6c.png"
               alt="visuel de la location"
            />
         </div>
         <h2>{title}</h2>
      </div>
   )
}

export default Card
