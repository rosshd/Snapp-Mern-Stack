import React from 'react'
import art from '../assets/icons/art.webp'
import education from '../assets/icons/education.webp'
import goods from '../assets/icons/goods.webp'
import healthcare from '../assets/icons/healthcare.webp'
import theatre from '../assets/icons/theatre.webp'
import tools from '../assets/icons/tools.webp'
import manufacturing from '../assets/icons/manufacturing.webp'
import plane from '../assets/icons/plane.webp'

const uses
 = () => {
  return (
    <div className='grid-cols-4 max-md:grid-cols-2 grid gap-[5dvw] py-[10vh] max-md:py-[5vh]'>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={art}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>  
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={education}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={goods}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={healthcare}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={theatre}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={tools}/>
          <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>  
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={manufacturing}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={plane}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
    </div>
  )
}

export default uses
