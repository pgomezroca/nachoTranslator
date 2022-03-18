import {useState, useEffect} from "react";

const Scripts = ()=>{

  const [script, setScript] = useState("Lorem ipsum dolor sit amet");
  const [translatedScript, setTranslatedScript] = useState("Lorem ipsum dolor sit amet TRANSLATED");

  const getScriptToTranslate = async()=>{

    return "lalallaa";
    let response = await fetch('http://localhost:5000/scipts/get');
    response = await response.json();

    return response.script;
  }

  //useEffect with [] parameter executes only the first time the component is mounted
  useEffect( ()=>{

    getScriptToTranslate().then(res=>setScript(res));

  },[]);


  const saveScript = ()=>{
    const savedScript = document.getElementById("translated").value;

    let data = {save:savedScript};

    setScript("lolo");

    fetch("http://localhost:3000/scipts/save", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });

  };

  return(
    <>
    <h1> Translate this text</h1>
    <textarea type='text' id="script" disabled="disabled">
      {script}
    </textarea>
    <textarea type='text' id="translated">{translatedScript}</textarea>

    <button id="submit" onClick={saveScript} >Save</button>
    </>
  )

  

}
export default Scripts