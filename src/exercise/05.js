// Ajouter du Style CSS
// http://localhost:3000/isolated/exercise/05.js

import "../05-styles.css"

// 🐶 Met du style sur les 3 conteneurs en te basant sur leur texte.
// 🐶 Nous avons importé le fichier CSS qui contient des classes
// 'container' 'container-small' etc ...

// 🐶 Utilise le prop `className` pour les propriétés générales du conteneur et une
// une specificité. (className aura donc 2 classes CSS)
// 🤖 className='container container-small' par exemple

// 🐶 Utilise ensuite du CSS Inline avec le prop `style` pour gerer le background color
// et la couleur du texte
// 🤖 style:{{color:'white', backgroundColor:'red'}}

{
  /*const smallContainer = (
  <div
    className="container--small container"
    style={{ backgroundColor: "black", color: "white" }}
  >
    Petit conteneur dark texte blanc
  </div>
)
const mediumContainer = (
  <div
    className="container--medium container"
    style={{ backgroundColor: "pink", color: "black" }}
  >
    Moyen conteneur rose texte noire
  </div>
)
const largeContainer = (
  <div
    className="container--large container"
    style={{ backgroundColor: "green", color: "black" }}
  >
    Grand conteneur vert rose texte noire
  </div>
)*/
}

const Container = ({ className, style, children }) => {
  return (
    <div
      className={`container ${className}`}
      style={{ border: "1px solid", ...style }}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Container
        className="container--small"
        style={{ backgroundColor: "darkslateblue", color: "white" }}
      >
        Petit conteneur dark texte blanc
      </Container>
      <Container
        className="container--medium"
        style={{ backgroundColor: "pink", color: "black" }}
      >
        Moyen conteneur rose texte noire
      </Container>
      <Container
        className="container--large"
        style={{ backgroundColor: "green", color: "black" }}
      >
        Grand conteneur vert rose texte noire
      </Container>
    </div>
  )
}

export default App
