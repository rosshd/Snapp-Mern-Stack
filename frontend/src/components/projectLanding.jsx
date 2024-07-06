import React from 'react'
import Button from './theButton'
import ImageCycle from './ImageShuffle'
import board1 from '../assets/cuttingBoards.png'
import board2 from '../assets/board2.png'
import iron1 from '../assets/ironSuit1.png'
import keychain from '../assets/keychain1.png'

const projectLanding = () => {
  return (
    <div className=' flex flex-col max-md:flex-col-reverse pb-[5vh] pt-[10vh] bg-zinc-900 justify-center items-center overflow-hidden '>

      <ImageCycle className="flex-row w-[100%] h-[40vh] overflow-hidden my-12 overflow-x-hidden">  
        <img src={board1} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] shadow-sm overflow-hidden absolute shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll"/>
        <img src={iron1} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] shadow-sm overflow-hidden absolute  shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-2000"/>
        <img src={board2} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] shadow-sm overflow-hidden absolute shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-4000"/>
        <img src={keychain} className="w-52 xl:w-[20dvw] xl:left-[-21dvw] self-center border-2 left-[-208px] shadow-sm overflow-hidden absolute shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-6000"/>
      </ImageCycle>
      
      <div className='flex flex-row justify-center items-center px-16 h-[40vh] max-md:mt-6'>
        <div className='h-fit flex flex-col gap-4 justify-center items-center max-md:self-start'>
          <h1 className='text-white opacity-80 w-[50dvw] max-md:w-[80dvw] text-center drop-shadow-lg rounded-lg bg-black bg-opacity-15 p-4 border-2 border-gray-400'>
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