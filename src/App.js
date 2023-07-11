import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
const [memberList, setMemberList ] = useState ([
    {name: "Elaine Benes", category:"main", role: "assistant" },
    {name: "George Costanza", category:"main",role: "lawyer" },
    {name: "Cosmo Kramer", category:"main", role: "unemployled"},
    {name: "Newman", category:"main", role: "postman" },
    {name: "Jerry Seinfeld", category:"main", role: "comedian" },
    {name: "Susan Ross", category:"support", role: "Costanza's fiancee" },
    {name: "Leslie", category:"support", role: "Kramer's GF" },
  ])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> 'Seinfeld' characters application form </h1>
        {memberList.map((member, i) => (
          <p key={i}>
            {member.name} - {member.category}- {member.role}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
