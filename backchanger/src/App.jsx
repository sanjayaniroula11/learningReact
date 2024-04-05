import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[color, setColor] = useState('white')

//  function changeColor(color){
//   setColor(color)
//  }

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color} }>

      <h1 className='text-3xl text-black text-center font-bold bg-clip-text'>Click on those buttons below to change the background color.</h1>
      <div className='fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-warp justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-2xl'>
          <button onClick={()=> setColor('red')} id='sanjaya'
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600 '>Red</button>

          <button onClick={()=> setColor('green')}
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-600 '>Green</button>
           
          <button onClick={()=> setColor('pink')}
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-600 '>Pink</button>

          <button onClick={()=> setColor('yellow')}
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-600 '>Yellow</button>

          <button onClick={()=> setColor('purple')}
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-purple-600'>Purple</button>

          <button onClick={()=> setColor('orange')}
           className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-600 '>Orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
