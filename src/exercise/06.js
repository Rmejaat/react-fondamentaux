// Ajouter du Style CSS
// http://localhost:3000/alone/exercise/05.js

// 🐶 Créé un composant ButtonActions
// 🐶 Conditionne le rendu en fonction d'un prop 'isAdmin'
// Si isAdmin est false alors on affichera que le bouton 'Lire'
// 🤖 ButtonActions({isAdmin})

// const buttonRead = <button>Lire</button>
// const buttonCreate = <button>Créer</button>
// const buttonUpdate = <button>Modifier</button>
// const buttonDelete = <button>Supprimer</button>

const AdminActions = () => {
  return (
    <>
      <button>Lire</button>
      <button>Créer</button>
      <button>Modifier</button>
      <button>Supprimer</button>
    </>
  )
}

const GuestActions = () => {
  return (
    <>
      <button>Lire</button>
    </>
  )
}

const ButtonActions = ({ isAdmin, hidden }) => {
  if (hidden) {
    return null
  }
  return isAdmin ? <AdminActions /> : <GuestActions />
}

function App() {
  return (
    <div>
      <ButtonActions isAdmin={false} hidden={false} />
    </div>
  )
}

export default App
