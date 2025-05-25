"use client"

import { useState } from "react"

// Les formulaires
// http://localhost:3000/alone/exercise/08.js

function LoginForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState()

  const handleChange = (e) => {
    setEmail(e.target.value)
    setError(e.target.value.includes("@") ? true : false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${email}`)
  }
  const handleHidden = () => {
    return
  }

  // 🐶 Gère l'événement onSubmit de <form> en créant une fonction 'handleSubmit'
  // 🤖 <form onSubmit={handleSubmit}>
  // 🤖 Utilise `event.preventDefault()` dans la fonction handleSubmit pour stopper
  // le comportement par defaut du formulaire (soumission et rafraichissement page)

  // 🐶 Affiche ensuite une popup Bonjour 'email@email.fr'
  // 🤖 Utilise `event.target.elements.emailInput.value` pour récupèrer la valeur de l'email
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse email :
        <input
          type="text"
          name="emailInput"
          value={email}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Connexion" />
      <div hidden={error} style={{ color: red }}>
        L'email est non valide
      </div>
    </form>
  )
}

function App() {
  return <LoginForm />
}

export default App
