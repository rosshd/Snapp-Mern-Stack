import React from 'react'
import Button from './theButton'
import ImageCycle from './ImageShuffle'
import board1 from '../assets/products/cuttingBoards.webp'
import board2 from '../assets/products/board2.webp'
import iron1 from '../assets/products/ironSuit1.webp'
import keychain from '../assets/products/keychain1.webp'

const projectLanding = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-zinc-300'>
      <div className=' flex flex-col w-[66dvw] dark:w-screen max-md:w-screen max-md:bg-transparent py-[5vh] dark:rounded-none dark:bg-zinc-900  rounded-2xl dark:border-none md:border-x-8 border-orange-300 bg-zinc-900 justify-center items-center overflow-hidden '>

        <ImageCycle className="flex flex-row w-[100%] max-xl:h-[300px] xl:h-[450px] lg:mb-12 z-30 overflow-hidden justify-center relative">  
          <img src={board1} className="w-52 h-[219.64px] xl:w-[302px] xl:h-[318.98px] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll"/>
          <img src={iron1} className="w-52 h-[276px] xl:w-[302px] xl:h-[401.33px] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden  shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-2000"/>
          <img src={board2} className="w-52 h-[276px] xl:w-[302px] xl:h-[401.33px] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-4000"/>
          <img src={keychain} className="w-52 h-[229.77px] xl:w-[302px] xl:h-[333.8px] xl:left-[-21dvw] self-center border-2 left-[-208px] bottom-0 z-30 absolute shadow-sm overflow-hidden shadow-gray-200 border-orange-300 rounded-md animate-infinite-scroll delay-6000"/>
        </ImageCycle>

        <div className='flex flex-row justify-center items-center px-12 h-[30vh] max-md:mt-6'>
          <div className='h-fit flex flex-col gap-4 justify-center items-center max-md:self-start'>
            <h1 className='dark:text-white md:text-white opacity-80 w-[50dvw] max-md:w-[80dvw] text-center drop-shadow-lg rounded-lg p-4 border-2 border-zinc-800 dark:border-gray-400'>
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
    </div>
    
  )
}

export default projectLanding