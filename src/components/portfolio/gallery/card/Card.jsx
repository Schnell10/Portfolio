import React from 'react'
import './card.scss'

const Card = ({ cover, title }) => {
   return (
      <div className="gallery__card">
         <img src={cover} alt="visuel du site" />
         <h3>{title}</h3>
      </div>
   )
}

export default Card
