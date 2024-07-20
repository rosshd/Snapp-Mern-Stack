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
    <div  className='flex flex-col items-center justify-center bg-zinc-300 dark:bg-zinc-800'>
      <h1 className='text-6xl font-semibold mb-8'>Applications</h1>
      <div className='grid-cols-4 max-md:grid-cols-2 grid gap-[5dvw] pb-[10vh] max-md:py-[5vh]'>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={art}/>
          <div className='rounded-md w-[100%] h-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>art</h1>
          </div>  
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={education}/>
          <div className=' h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center'>education</h1>
          </div>
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={goods}/>
          <div className='rounded-md w-[100%] h-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>consumer goods</h1>
          </div>
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={healthcare}/>
          <div className='rounded-md w-[100%] h-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>medical prototyping</h1>
          </div>
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={theatre}/>
          <div className='h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>theatre props</h1>
          </div>
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={tools}/>
          <div className='h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>tools</h1>
          </div>    
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={manufacturing}/>
          <div className='h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>manufacturing</h1>
          </div>
        </div>
        <div className='bg-zinc-800 bg-opacity-75 drop-shadow-lg h-[40vh] w-[18dvw] max-md:h-[25vh] max-md:w-[36dvw] rounded-md px-2 py-2 flex flex-col justify-stretch items-center shadow-md shadow-zinc-500 hover:shadow-zinc-100 hover:rounded-xl hover:scale-105 hover:bg-slate-700 transition duration-200'>
          <img loading='lazy' className='w-[10dvw] justify-self-start mb-4' src={plane}/>
          <div className='h-[100%] rounded-md w-[100%] bg-zinc-900 bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-white text-center '>aerospace design</h1>
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default uses
