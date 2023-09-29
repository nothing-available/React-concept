import { useState } from 'react'

function App() {
  const [bg, setBg] = useState('black')

  return (
    <div className='w-full h-screen duration-500'
      style={{ backgroundColor: bg }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-2 py-1 rounded-3xl'>

            <button onClick={()=>setBg('red')} className='outline-none px-3 rounded-full py-1  text-yellow-50 shadow-lg'
            style={{backgroundColor:"red"}}>red</button>

            <button onClick={()=>setBg('green')} className='outline-none px-3 rounded-full py-1  text-yellow-50 shadow-lg'
            style={{backgroundColor:"green"}}>green</button>

            <button onClick={()=>setBg('blue')} className='outline-none px-3 rounded-full py-1  text-yellow-50 shadow-lg'
            style={{backgroundColor:"blue"}}>blue</button>

            <button onClick={()=>setBg('brown')} className='outline-none px-3 rounded-full py-1  text-yellow-50 shadow-lg'
            style={{backgroundColor:"brown"}}>brown</button>

            <button onClick={()=>setBg('grey')} className='outline-none px-3 rounded-full py-1  text-yellow-50 shadow-lg'
            style={{backgroundColor:"grey"}}>grey</button>


          </div>
        </div>
      </div>
  )
}

export default App
