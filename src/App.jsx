import { useState } from 'react'
import './App.css'

function App() {


  return (

    <div className='w-full min-h-dvh flex items-center justify-center'>
        <div className='w-4/5 min-h-full p-8 border rounded-lg 
         flex items-center justify-center
        '>

          <div className='
           max-w-full h-full flex items-center justify-center border-2
           border-graydark rounded-xl p-4 flex-col bg-primary
          '>
             <div className='max-w-4/5 flex justify-center items-center'>
                <input type="text" name="result" id="result" disabled className='
                  px-14 py-2 rounded-lg bg-graydark border border-secundary text-text
                  text-base w-full
                '/>
             </div>

             <div className='
              w-full h-full my-6 grid grid-cols-5
             '>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>c</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>ac</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>9</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>8</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>7</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>6</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>5</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>4</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>3</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>2</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>1</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>0</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>.</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>x</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>/</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>-</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               '>+</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase col-span-3 bold text-2xl
               '>=</button>
             </div>
          </div>

        </div>
    </div> 
  )
}

export default App
