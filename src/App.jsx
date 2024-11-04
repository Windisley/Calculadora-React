import { useState, useRef } from 'react'
import './App.css'

function App() {
  
  const [result, setResult] = useState("")

  function operation(btn){
      const textnumber = btn.target.innerText
   
      
      if(textnumber === "="){
          setResult(eval(result.replace(/x/g, "*").toString()))
      }
      else if(textnumber == "AC"){
        setResult("")
        
      }else if(textnumber == "C"){
        const unitvalue = result.slice(0, -1)
        
        setResult(unitvalue)

      }else {
        setResult(value=> value+=textnumber)
      }
      
    }

   
   
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
                <input type="text" name="result" id="result" className='
                  px-14 py-2 rounded-lg bg-graydark border border-secundary text-text
                  text-base w-full outline-none text-end text-lg
                'value={result}/>
             </div>

             <div className='
              w-full h-full my-6 grid grid-cols-5
             '>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>c</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               'onClick={operation}>ac</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>9</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>8</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>7</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>6</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>5</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>4</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>3</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>2</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>1</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>0</button>
             
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
               
               ' onClick={operation}>x</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>/</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>-</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase
               ' onClick={operation}>+</button>
               <button className='
                max-w-full h-full border p-4 text-xl text-text
                bg-graydark hover:bg-secundary ease-in duration-300 
                uppercase col-span-4 bold text-2xl
               ' onClick={operation}>=</button>
             </div>
          </div>

        </div>
    </div> 
  )
}

export default App
