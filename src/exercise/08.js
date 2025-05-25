"use client"

import { useState } from "react"

// Les States
// http://localhost:3000/alone/exercise/08.js

// 🐶 Créé un fonction 'addSkillPython' qui ajoute le skill Python
// 🤖 skills.push({id:'xxxx', value: 'Python'})
// 🤖 Utilise {id:`${Math.random()}` pour générer un id aléatoire
// 🐶 dans la fonction 'addSkillPython' logue le tableau skills
// 🤖 console.log('skills',skills)

const initialSkills = [
  { id: "e313", value: "HTML" },
  { id: "f980", value: "CSS" },
  { id: "11eb", value: "JS" },
  { id: "9a03", value: "REACT" },
  { id: "65d4", value: "ANGULAR" },
]

// 🐶 Créé un button dans le render et sur l'evenement onclick passer la fonction 'addSkillPython'
// 🤖 <button onClick={addSkillPython}
const MesSkills = () => {
  const [skills, setSkills] = useState(initialSkills)

  const addSkillPython = () => {
    const id = Math.random()
    setSkills([...skills, { id, value: "Python" }])
  }

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.value}</li>
        ))}
      </ul>
      <button onClick={addSkillPython}>Add Skill</button>
    </>
  )
}

function App() {
  return <MesSkills />
}

export default App
