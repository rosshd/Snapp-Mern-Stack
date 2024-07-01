import React from 'react'
import Button from './theButton'
import ImageCycle from './ImageShuffle'
import board1 from '../assets/cuttingBoards.png'
import board2 from '../assets/board2.png'
import iron1 from '../assets/ironSuit1.png'
import keychain from '../assets/keychain1.png'

const projectLanding = () => {
  return (
    <div className='h-dvh sm:flex sm:flex-col man-w-screen bg-zinc-900 bg-gradient-to-br p-4 justify-center items-center overflow-hidden'>
      <div>
        <h1 className='text-white opacity-95 text-center text-7xl lg:text-7xl max-md:py-4 font-serif'>Some Of Our Work</h1>
      </div>
      <ImageCycle className="flex-row overflow-hidden w-[100%] h-[60%] max-md:h-[50%] items-center bg-opacity-20 bg-gradient-to-b bg-blend-color to-zinc-900">  
        <img src={board1} className="w-[18dvw] max-md:w-[30dvw] border-2 left-[-22%] shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll absolute delay-0"/>
        <img src={iron1} className="w-[18dvw] max-md:w-[30dvw] border-2 left-[-22%] shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll absolute delay-2000"/>
        <img src={board2} className="w-[18dvw] max-md:w-[30dvw] border-2 left-[-22%] shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll absolute delay-4000"/>
        <img src={keychain} className="w-[18dvw] max-md:w-[30dvw] border-2 left-[-22%] shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll absolute delay-6000"/>
      </ImageCycle>
      <div className='flex flex-row h-fit justify-center items-end max-md:items-center px-60 md:space-x-6 max-md:flex-col'>
        <div>
          <h1 className='text-white opacity-80 w-[45dvw] max-md:w-[66dvw] max-md:text-center drop-shadow-lg'>
Explore limitless creativity with our bespoke services tailored to bring your wildest ideas to life. 
Specializing in a wide array of 3D solutions including printing, modeling, CNC machining, laser engraving, animation, 
and filament recycling. If you are interested, check out our gallery of completed projects.</h1>
        </div>
        <Button href='/gallery' className="self-center max-md:mt-4">
          <h1>Gallery</h1>
          <img className=" mx-2 w-4 transition duration-300 ease-in-out d-4 border-y-8 border-y-transparent border-l-[16px] 
            border-l-orange-300" />
        </Button>
      </div>
      
        
    </div>
  )
}

export default projectLanding