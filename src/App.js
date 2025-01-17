import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([
    { name: "Elaine Benes", category: "main", role: "assistant" },
    { name: "George Costanza", category: "main", role: "lawyer" },
    { name: "Cosmo Kramer", category: "main", role: "unemployled" },
    { name: "Newman", category: "main", role: "postman" },
    { name: "Jerry Seinfeld", category: "main", role: "comedian" },
    { name: "Susan Ross", category: "support", role: "Costanza's fiancee" },
    { name: "Leslie", category: "support", role: "Kramer's GF" },
  ]);
  const [editOrder, setEditOrder] = useState(null);

  function editHandler(order) {
    console.log("editHandler kontrolü");
    setEditOrder(order);
  }
  const addMemberA = (newMember) => {
    console.log("addMember kontrolü", newMember);
    // buraya eğer aynı değer varsa editliğim değeri yeniden yazdırma diyeceğim.
    if (editOrder !== null) {
      const newMemberList = [...memberList];
      newMemberList[editOrder] = newMember;
      setMemberList(newMemberList);
      setEditOrder(null);
    } else {
      const newMemberList = [...memberList, newMember];
      setMemberList(newMemberList);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> 'Seinfeld' characters application form </h1>
        {memberList.map((member, i) => (
          <span key={i}>
            {member.name} - {member.category}- {member.role}
            <button onClick={() => editHandler(i)}>. ORDER .</button>
          </span>
        ))}
        <Form addMember={addMemberA} editingMember={memberList[editOrder]} />
      </header>
    </div>
  );
}

export default App;

// <form> a onsubmit ekleyip for olan html leri de js e göre htmlFor olarak düzenledim. tıpkı className gibi. yukarı da bir submitFN yaptım preventDefault lu.
// label ları strong etiketiyle değiştirdim, biraz kalın etiket olsunlar diye. inputlarda id ='fname' vardı onları kaldırdım burda i ile tanımladım ihtiyacım yok artık ordakilere.
// <input type="submit" value="Submit"/> bunu button ile değiştirdim çünkü buttonda içine onClick yazmama gerek kalmıyor.
// button un type ına submit dediğim için gidip submite dair bişey aradı ve submit fonksiyonunu buldu. onu çalıştıracak. ya da buttonun içine onClick={submitFN} yazarsam gerek yok form un içine yazmama.
// sonra burdan form u kestim, gittim yeni componentimin içine koydum Form.js e. sonra onu buraya tanıtıcam hepsi bu.
// formun kullandığı submitFn umu da Form.js e yapıştırdım. buraya import ettim. sonra da bunun bir child ı olması gerekmediğinden yalnızce self-closing ile <Form/> çağırdım.
// component klasörünü src nin dışında desteklemedi. src nin içine taşıdım!
//Form.js i doldurdum.
// bir fonksiyon ile kendine gelen member ı memberList in sonuna ekletiyorum. ama pushla uğraşmıyorum direk spirit ile yaptım.
// <Form/> içine form.js  için bir kapı açıyorum. addmember içine addMEmber fonksiyonumu koyarak üye eklettiricem. sonra Form.js e geçtim. artık bir parametreyle çalışan fons oldu. onlar da prosps larımform fonksiyonuna props parametresini verdim.
//submit fonksiyonuna props.addMember(dataForm) ekledim. her eklediğim üyeyi gidip ana arrayime ekleyecek ve bana gösterecek.
// editingMember propune memberList imde ilgili editOrder ı verir bana, beklentim bu.
