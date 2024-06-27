import React from 'react'
import Button from './theButton'

const projectLanding = () => {
  return (
    <div className='h-dvh w-dvw bg-zinc-950 border-b-2 border-b-orange-300 justify-center items-center'>
      <div>
        <h1 className='text-white text-center p-20 text-6xl lg:text-8xl shadow-sm'>Some Of Our Work</h1>
      </div>
      <div>
        <p1 className='text-white'>we specialize in custom requests that can bring any of your wildest ideas that you have to life! If you are interested, feel free to take a look at our gallery of completed projects.</p1>
      </div>
      <Button href='/gallery'>
        <p1>Gallery</p1>
        <img class=" mx-2 w-4 transition duration-300 ease-in-out h-4 border-y-8 border-y-transparent border-l-[16px] 
          border-l-orange-300" />
      </Button>
        
    </div>
  )
}

export default projectLanding