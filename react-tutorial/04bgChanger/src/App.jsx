import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState('gray')

  // function changeColor (color) {
  //   setColor(color)
  // }

  return (
    <>
      {/* <h1 className='bg-gray-400 text-center text-3xl '>Background color changer with vite</h1> */}
      <div
        className='w-full h-screen duration-200' style={{backgroundColor:color}}
      >
        <div 
          className='fixed flex flex-wrap bottom-12 justify-center px-2 inset-x-0'
        >
          <div
            className='flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'
          >
            <button 
              className='bg-red-600 outline-none px-4 py-1 rounded-full shadow-lg text-white'
              onClick={()=> setColor('red')}
            >Red</button>
            <button 
              className='bg-green-600 outline-none px-4 py-1 rounded-full shadow-lg text-white'
              onClick={()=> setColor('green')}
            >Green</button>
            <button 
              className='bg-blue-600 outline-none px-4 py-1 rounded-full shadow-lg text-white'
              onClick={()=> setColor('blue')}
            >Blue</button>
            <button 
              className='bg-orange-600 outline-none px-4 py-1 rounded-full shadow-lg text-white'
              onClick={()=> setColor('orange')}
            >Orange</button>
            <button 
              className='bg-yellow-500 outline-none px-4 py-1 rounded-full shadow-lg text-white'
              onClick={()=> setColor('yellow')}
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
