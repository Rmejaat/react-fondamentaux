// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

{
  /*const skills = []
// 🐶 Corrige ce code avec des keys uniques sur les elements <li>
skills.push(<li>HTML</li>)
skills.push(<li>CSS</li>)
skills.push(<li>JS</li>)
skills.push(<li>REACT</li>)
skills.push(<li>ANGULAR</li>)


function MesSkills() {
  return <ul>{skills.map((skill) => skill)}</ul>
}*/
}

{
  /*const skills = ["HTML", "CSS", "JS", "REACT", "ANGULAR"]

const MesSkills = () => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  )
}*/
}

const skills = [
  { id: "e313", value: "HTML" },
  { id: "f980", value: "CSS" },
  { id: "11eb", value: "JS" },
  { id: "9a03", value: "REACT" },
  { id: "65d4", value: "ANGULAR" },
]

const MesSkills = () => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.value}</li>
      ))}
    </ul>
  )
}

function App() {
  return <MesSkills />
}

export default App
