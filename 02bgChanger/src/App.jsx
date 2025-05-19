import { useState } from 'react'

// import './App.css'

function App() {
  const [color, setColor] = useState("olive")
    
  

  return (
<div className = " w-full h-screen flex justify-center items-center"
 style={{backgroundColor: color}}>
  
     
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' style={{backgroundColor: "white"}}> 
        <button className=' outline-none bg-red-500 text-white px-4 py-1 rounded-full'
        style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className='outline-none bg-red-500 text-white px-4 py-1 rounded-full'
        style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className=' outline-none bg-red-500 text-white px-4 py-2 rounded-full'
        style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className=' outline-none bg-red-500 text-white px-4 py-2 rounded-full'
        style={{backgroundColor: "violet"}} onClick={() => setColor("violet")}>Violet</button>
        <button className=' outline-none bg-red-500 text-white px-4 py-2 rounded-full'
        style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
        <button className=' outline-none bg-red-500 text-white px-4 py-2 rounded-full'
        style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
      </div>
     </div>
         <h1 className='w-full text-black  px-4 py-1 bg-red-500'>background Changer</h1>
      </div>
 
  )
}

export default App
