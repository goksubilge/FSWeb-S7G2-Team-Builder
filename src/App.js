import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
const [memberList, setMemberList ] = useState ([
    "member1","member2","member 3"
  ])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> WIT STARTING </p>
        {memberList.map((member) => ( <p>{member}</p> ))}
      </header>
    </div>
  );
}

export default App;
