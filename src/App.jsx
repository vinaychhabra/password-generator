import { useCallback, useEffect, useState, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState('')  

  
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
           />
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
