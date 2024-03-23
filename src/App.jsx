import { useCallback, useEffect, useState, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState('')  
  const passwordRef = useRef(null)
  const [btnText, setBtnText] = useState("Copy")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowedNumber) str += "0123456789"
    if (allowedChar) str += "!@#$%^&*~"
    
    for (let i = 1; i <= length; i++ ){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, allowedChar, allowedNumber, setPassword])

  const copyPasswordToClip = useCallback(()=>{
  
    passwordRef.current?.select()
    const selectionEnd = passwordRef.current?.selectionEnd;
    window.navigator.clipboard.writeText(password)
    setBtnText("Copied")
    setTimeout(()=>{
      setBtnText("Copy")
      passwordRef.current?.setSelectionRange(selectionEnd, selectionEnd);
    },2000)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[allowedChar,allowedNumber,length,passwordGenerator])
  return (
    <>
    <h1 className="text-orange-500 mx-auto text-center text-3xl my-4 shadow-md">Password Generator</h1>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4">
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
           value = {password}
           className="outline-none w-full px-1 py-3"
           placeholder='Password'
           readOnly
           ref = {passwordRef}
           />
           <button onClick={copyPasswordToClip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">{btnText}</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={40} value = {length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"  
            defaultChecked={allowedNumber}
            id="numberInput"
            onChange={()=> {setAllowedNumber((prev => !prev))}}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"  
            defaultChecked={allowedChar}
            id="charInput"
            onChange={()=> {setAllowedChar((prev => !prev))}}
            />
            <label htmlFor="charInput">Spl. Characters</label>
          </div>
        </div>
     
      </div>
      <div className="w-full fixed bottom-4 text-center mx-auto text-white"><p className="text-center">Designed and Developed by Vinay Chhabra</p></div>  
    </>
  )
}

export default App
