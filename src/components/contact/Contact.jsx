import React from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'

const Contact = () => {
   const onSubmit = (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const userData = {
         name: formData.get('name'),
         email: formData.get('email'),
         message: formData.get('message'),
      }

      emailjs
         .send('send-email', 'template_dd148u5', userData, 'RKb2EkCjDlxeLNrMh')
         .then(
            (result) => {
               console.log(result.text)
            },
            (error) => {
               console.log(error.text)
            },
         )
   }

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
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Nom"
                  required
               />

               <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
               />

               <textarea
                  id="message"
                  name="message"
                  autoComplete="message"
                  placeholder="Message"
                  required
               />

               <button type="submit">Me contacter</button>
            </form>
         </div>
      </div>
   )
}

export default Contact
