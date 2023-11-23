import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import validator from 'validator'

import './contact.scss'

const Contact = () => {
   // Utilisation du hook useState pour gérer l'état du message de confirmation
   const [message, setMessage] = useState(null)

   // Fonction appelée lors de la soumission du formulaire
   const onSubmit = async (e) => {
      e.preventDefault()

      // Extraction des données du formulaire
      const formData = new FormData(e.target)
      const userData = {
         name: formData.get('name'),
         email: formData.get('email'),
         message: formData.get('message'),
      }
      //Regexp rour vérifier l'email via la bibliothèque @hapi/address
      if (!userData.email || !validator.isEmail(userData.email)) {
         setMessage('Veuillez saisir une adresse e-mail valide.')
      }
      if (!userData.name || !userData.message) {
         setMessage('Merci de compléter tous les champs')
      }

      try {
         // Envoi des données du formulaire via emailjs
         const result = await emailjs.send(
            'send-email',
            'template_dd148u5',
            userData,
            'RKb2EkCjDlxeLNrMh',
         )
         console.log(result.text)

         // Affichage du message de confirmation
         setMessage('Votre message a bien été envoyé !')

         // Réinitialisation du formulaire en effaçant les valeurs des champs
         e.target.reset()
      } catch (error) {
         // En cas d'erreur, affichage du message d'erreur
         console.log(error.text)
         setMessage("Une erreur s'est produite. Veuillez réessayer.")
      }
   }

   // Fonction appelée lorsqu'un champ du formulaire est focus
   const onFocus = () => {
      setMessage(null)
   }

   // Rendu du composant Contact
   return (
      <div id="contact">
         <h2>Me contacter</h2>
         <div className="container-contact">
            <div className="contact-text">
               <h3>Vous souhaitez me contacter ?</h3>
               <p>
                  N'hésitez pas à utiliser le formulaire pour m'envoyer un
                  message. Je vous répondrai dans les plus brefs délais.
               </p>
            </div>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Nom"
                  onFocus={onFocus}
                  required
               />

               <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  onFocus={onFocus}
                  required
               />

               <textarea
                  name="message"
                  autoComplete="message"
                  placeholder="Message"
                  onFocus={onFocus}
                  required
               />

               <button type="submit">Me contacter</button>

               {message && (
                  <div className="confirmation-message">
                     <p>{message}</p>
                  </div>
               )}
            </form>
         </div>
      </div>
   )
}
export default Contact
