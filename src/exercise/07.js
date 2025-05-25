// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

const skills = []
// 🐶 Corrige ce code avec des keys uniques sur les elements <li>
skills.push(<li key="HTML">HTML</li>)
skills.push(<li key="CSS">CSS</li>)
skills.push(<li key="JS">JS</li>)
skills.push(<li key="REACT">REACT</li>)
skills.push(<li key="ANGULAR">ANGULAR</li>)

function MesSkills() {
  return <ul>{skills.map((skill) => skill)}</ul>
}

function App() {
  return <MesSkills />
}

export default App
