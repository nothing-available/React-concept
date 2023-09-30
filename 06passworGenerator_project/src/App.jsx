import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
   const [length, setlength] = useState(8);
   const [hasNumber, sethasNumber] = useState(false);
   const [hasCaracter, sethasCaracter] = useState(false);
   const [hasPassword, sethasPassword] = useState("");

   const passwordRef = useRef(null);

   const passwordGenerator = useCallback(() => {

      let password = "";

      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (hasNumber) {
         str += "0123456789";
      }

      if (hasCaracter) {
         str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      }

      for (let i = 1; i <= length; i++) {
         let char = Math.floor(Math.random() * str.length + 1);
         password += str.charAt(char);
      }

      sethasPassword(password);

   }, [length, hasNumber, hasCaracter, sethasPassword])

   const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,18);
      window.navigator.clipboard.writeText(hasPassword)
   },[hasPassword])

   useEffect(() => {
      passwordGenerator();
   }, [length, hasNumber, hasCaracter, passwordGenerator])

   return (
      <>
         <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400  bg-gray-800'>
            <h1 className='text-center text-2xl font-bold py-2'>Password Generator</h1>

            <div className='flex shadow rounded-lg overflow-hidden mb-4'>

               <input
                  type='text'
                  value={hasPassword}
                  className='outline-none w-full py-1 px-3'
                  placeholder='password'
                  readOnly
                  ref={passwordRef}
               />

               <button
                  onClick={copyPasswordToClipboard}
                  className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0'>copy
               </button>

            </div>

            <div className='flex text-sm gap-x-2'>

               <div className='flex items-center gap-x-1'>
                  <input
                     type='range'
                     min={8}
                     max={20}
                     value={length}
                     className='cursor-pointer'
                     onChange={(e) => { setlength(e.target.value) }}
                  />
                  <label>length:{length}</label>
               </div>

               <div className='flex items-center gap-x-1'>
                  <input
                     type='checkbox'
                     id='numberInput'
                     defaultChecked={hasNumber}
                     onChange={() => { sethasNumber((prev) => !prev) }}
                  />
                  <label htmlFor='numberInput'>Numbers</label>
               </div>

               <div className='flex items-center gap-x-1'>
                  <input
                     type='checkbox'
                     defaultChecked={hasCaracter}
                     id='characterInput'
                     onChange={() => { sethasCaracter((prev) => !prev) }}
                  />
                  <label htmlFor='carcterInput'> Charcters</label>
               </div>

            </div>
         </div>
      </>
   )
}

export default App
