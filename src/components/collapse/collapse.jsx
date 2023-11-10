import React, { useState } from 'react'
import arrowOpen from '../../assets/logo/arrow-collapse.png'
import './collapse.scss'

const Collapse = ({ descriptionCollapse }) => {
   // Utilisation de l'état local (useState) pour gérer l'ouverture ou la fermeture du Collapse
   const [open, setOpen] = useState(false)

   // Fonction toggle pour basculer l'état ouvert/fermé du Collapse
   const toggle = () => {
      setOpen(!open)
   }

   return (
      <div className={`collapse ${open ? 'active' : ''}`}>
         <button onClick={toggle}>
            <p>Description</p>
            <img
               src={arrowOpen}
               alt={`flêche pour ${open ? 'fermer' : 'ouvrir'} le collapse`}
            />
         </button>
         <div className={`collapse__toggle ${open ? 'active' : ''}`}>
            <p>{descriptionCollapse}</p>
         </div>
      </div>
   )
}

export default Collapse
