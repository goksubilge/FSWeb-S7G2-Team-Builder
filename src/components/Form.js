import React, { useState, useEffect } from "react";
// inputlardaki value ları dataForm daki boş değerlerle eşliyorum ki başlangıçta bana yazacağım kutuyu boş göstersin.
// onChangeFN inputlara yerleştiriyorum ki her bir eventte fonksiyonu çalıştırıyorum ve formu harf harf dolduruyorum.
// onchange fonk içini düzenliyorum ki fonk olsun işlem yapsın.
// ilk data isimli bi veri oluşturdum. yazarken sıkıntı çıkmasın diye
// input un içine vale değerini = {dataForm} yazarak wiev ı state e bağlamış oldum.
// onchange={chanceHandler} fons ile de dataForm da yaptığım değişiklikleri göstersin istiyorum ekranda. değişen verileri bu fonks göndermiş oluyorum.

function Form (props) {
  console.log("Form.js in proplar:")

  useEffect (() => {
    console.log ("useEffect kontrolü:");
    if (props.editingMember) {
      console.log("editing member var!");
      setDataForm(props.editingMember);
    }
  }
  ,[props.editingMember])
  
  const ilkData = {
    name: "", 
    category:"", 
    role: "",
}
  const [dataForm, setDataForm] = useState (ilkData)
  
  const resetFN = ()=> {
    console.log("reset FN")
    setDataForm(ilkData)
  }

  const onChangeFN =(e) => {
    console.log("onchange çalışma kontrolü", e);
    const editField = e.target.name;
    const newValue = e.target.value;
    let newDataForm = {...dataForm, [editField]: newValue};
    setDataForm(newDataForm);
  }

  const submitFN= (e) => {
        //console.log("submitfonks çalıştırma kontrolü");
        e.preventDefault();
        props.addMember(dataForm);
  }

  return (
        <form onSubmit={submitFN}>
          <strong htmlFor="name">name:</strong>
          <input type="text" name="name" value={dataForm.name} onChangeFN={onChangeFN} placeholder="Jerry Seinfeld"/><br></br>
          <strong htmlFor="category">category:</strong>
          <input type="text" name="category" value={dataForm.category} onChangeFN={onChangeFN} placeholder="main"/><br></br>
          <strong htmlFor="role">role:</strong>
          <input type="text" name="role" value={dataForm.role} onChangeFN={onChangeFN}/><br></br>
          <button type="submit" onClick={submitFN}>.   SEND   .</button><br></br>
          <button type="reset" onClick={resetFN}>.   RESET   .</button>
        </form>
  )
}
export default Form;