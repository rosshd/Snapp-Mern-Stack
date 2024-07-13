import React from 'react'
import Button from './theButton'
import ImageCycle from './ImageShuffle'
import board1 from '../assets/products/cuttingBoards.png'
import board2 from '../assets/products/board2.png'
import iron1 from '../assets/products/ironSuit1.png'
import keychain from '../assets/products/keychain1.png'

const projectLanding = () => {
  return (
    <div className=' flex flex-col w-[75dvw] dark:w-screen py-[5vh] dark:rounded-none dark:bg-zinc-900 bg-zinc-50  rounded-2xl dark:border-none md:border-y-8 border-orange-300 md:bg-zinc-900 justify-center items-center overflow-hidden '>

      <ImageCycle className="flex flex-row w-[100dvw] h-[300px] xl:h-[60vh] mb-12 z-30 overflow-hidden justify-center relative ">  
        <img src={board1} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll"/>
        <img src={iron1} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden  shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-2000"/>
        <img src={board2} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-4000"/>
        <img src={keychain} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-6000"/>
      </ImageCycle>
      
      <div className='flex flex-row justify-center items-center px-12 h-[40vh] max-md:h-[30vh] max-md:mt-6'>
        <div className='h-fit flex flex-col gap-4 justify-center items-center max-md:self-start'>
          <h1 className='dark:text-white md:text-white opacity-80 w-[50dvw] max-md:w-[80dvw] text-center drop-shadow-lg rounded-lg bg-black bg-opacity-15 p-4 border-2 border-gray-400'>
            Explore limitless creativity with services tailored to bring your wildest ideas to life. 
            Specializing in a wide array of 3D solutions including printing, modeling, CNC machining, laser engraving, animation, 
            and filament recycling. If you are interested, check out our gallery of completed projects.</h1>
          <Button href='/gallery'>
            <h1>Gallery</h1>
            <img className=" mx-2 w-4 transition duration-300 ease-in-out d-4 border-y-8 border-y-transparent border-l-[16px] 
            border-l-orange-300" />
          </Button>
          
        </div>
        
      </div>

    </div>
  )
}

export default projectLanding