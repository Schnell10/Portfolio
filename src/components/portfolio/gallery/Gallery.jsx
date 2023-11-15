import React from 'react'
import cardsData from '../../../datas.json'
import Card from './card/Card'
import { Link } from 'react-router-dom'
import './gallery.scss'

const Gallery = () => {
   return (
      <div className="gallery">
         {cardsData.map((card) => (
            <figure key={card.id}>
               <Link to={'/Portfolio/projet/' + card.id}>
                  <Card cover={card.cover} title={card.title} />
                  {/* On fait passer les props au composant Card*/}
               </Link>
            </figure>
         ))}
      </div>
   )
}

export default Gallery
