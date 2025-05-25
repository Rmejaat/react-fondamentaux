// Ajouter du Style CSS
// http://localhost:3000/alone/exercise/05.js

// 🐶 Créé un composant ButtonActions
// 🐶 Conditionne le rendu en fonction d'un prop 'isAdmin'
// Si isAdmin est false alors on affichera que le bouton 'Lire'
// 🤖 ButtonActions({isAdmin})

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

const ButtonActions = ({ isAdmin }) => {
  return isAdmin ? (
    <>
      {buttonRead}
      {buttonCreate}
      {buttonUpdate}
      {buttonDelete}
    </>
  ) : (
    <> {buttonRead}</>
  )
}

function App() {
  return (
    <div>
      <ButtonActions isAdmin={true} />
    </div>
  )
}

export default App
