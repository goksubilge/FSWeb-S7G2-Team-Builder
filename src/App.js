
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
  // <form> a onsubmit ekleyip for olan html leri de js e göre htmlFor olarak düzenledim. tıpkı className gibi. yukarı da bir submitFN yaptım preventDefault lu.
  // label ları strong etiketiyle değiştirdim, biraz kalın etiket olsunlar diye. inputlarda id ='fname' vardı onları kaldırdım burda i ile tanımladım ihtiyacım yok artık ordakilere.
  // <input type="submit" value="Submit"/> bunu button ile değiştirdim çünkü buttonda içine onClick yazmama gerek kalmıyor.
  // button un type ına submit dediğim için gidip submite dair bişey aradı ve submit fonksiyonunu buldu. onu çalıştıracak. ya da buttonun içine onClick={submitFN} yazarsam gerek yok form un içine yazmama.
  //
  
  const submitFN= (e) => {
    //console.log("submitfonks çalıştırma kontrolü");
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> 'Seinfeld' characters application form </h1>
        {memberList.map((member, i) => (
          <span key={i}>
            {member.name} - {member.category}- {member.role}
          </span>
        ))}

        <form onSubmit={submitFN}>
          <strong htmlFor="name">name:</strong>
          <input type="text" name="name" value="John"/><br></br>
          <strong htmlFor="category">category:</strong>
          <input type="text" name="category" value="Doe"/><br></br>
          <strong htmlFor="role">role:</strong>
          <input type="text" name="role" value="Doe"/><br></br>
          <button type="submit">.   SEND   .</button>
        </form>
      </header>
    </div>
  );
}

export default App;
