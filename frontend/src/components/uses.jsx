import React from 'react'
import art from '../assets/icons/art.png'
import education from '../assets/icons/education.png'
import goods from '../assets/icons/goods.png'
import healthcare from '../assets/icons/healthcare.png'
import theatre from '../assets/icons/theatre.png'
import tools from '../assets/icons/tools.png'
import manufacturing from '../assets/icons/manufacturing.png'
import plane from '../assets/icons/plane.png'

const uses
 = () => {
  return (
    <div className='grid-cols-4 max-md:grid-cols-2 grid gap-[5dvw] py-[10vh] max-md:py-[5vh]'>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={art}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>  
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={education}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={goods}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={healthcare}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={theatre}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={tools}/>
          <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>  
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={manufacturing}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
      <div className='bg-slate-700 bg-opacity-50 h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-zinc-800 transition duration-200'>
        <img className='w-[10dvw] justify-self-start mb-4' src={plane}/>
        <h1 className='text-white text-center h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50'>this is good</h1>
      </div>
    </div>
  )
}

export default uses
