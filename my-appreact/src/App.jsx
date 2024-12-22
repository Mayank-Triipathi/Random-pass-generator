import React, { useEffect, useRef } from "react";
import {useState,useCallback} from "react";
function App(){
  const [pass , setpass] = useState("");
  const [length,setlength] = useState(0);
  const [numallowed,setnum] = useState(true);
  const [charallowed,setchar] = useState(true);

  const passgenerator  = useCallback(()=>{
    let p = "";
    
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let char = "~!@#$%^&*(){}[]";
    if(numallowed) str += num;
    if(charallowed) str+= char;
    for(let i =0;i<length;i++){
      const random = Math.floor((Math.random()*str.length)+1);
      p += str.charAt(random);
    };
    setpass(p);
  },[length,numallowed,charallowed]);

  const passref  = useRef(null);

  const copytoclip = useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() =>{passgenerator()},[length,numallowed,charallowed])

  return( 
    <>
    <input readOnly type="text" value={pass} ref={passref}>
    </input>
    <button onClick={copytoclip}>copy</button>
    <input type="range" value={length} min={0} max={100} onChange={(e) =>{setlength(Number(e.target.value))}}>
    </input>
    <label>length : {length}</label>
    <br/>
    <button onClick={passgenerator}>Passgenerate</button>
    <input id="numinput" type="checkbox" onChange={() =>{setnum((prev) =>{return !prev})}} defaultChecked={numallowed}/>
    <label htmlFor="numinput">num</label>
    <input id="charinput"type="checkbox" onChange={() =>{setchar((prev) =>{return !prev})}} defaultChecked={charallowed}/>
    <label htmlFor="charinput">char</label>
    </>
  )
}
export default App;