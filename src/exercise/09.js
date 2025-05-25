"use client"

import { useRef } from "react"

// Les formulaires
// http://localhost:3000/alone/exercise/08.js

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${inputRef.current.value}`)
  }

  const inputRef = useRef()
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
        <input type="text" name="emailInput" ref={inputRef} />
      </label>
      <input type="submit" value="Connexion" />
    </form>
  )
}

function App() {
  return <LoginForm />
}

export default App
