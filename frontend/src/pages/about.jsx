import React from 'react'
import Printer from '../assets/image0.jpeg'
import ContSoci from '../components/contSocials'
import mainLogo from '../assets/mainLogo.webp'
import NavBar from '../components/navBar'

const aboutUs = () => {
  return (
    <div className=' scrollbar-thin scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent 
    w-screen bg-zinc-200 dark:bg-zinc-900 justify-center items-center md:pt-20 py-8'>
        <div className='w-screen flex flex-col lg:flex-row items-center justify-center mb-[10vh] lg:py-16'>
          <div className='lg:flex lg:justify-center lg:items-center lg:border-orange-400 lg:border-b-4 lg:drop-shadow-md lg:rounded-md p-8'>
            <h1 className='text-8xl max-md:text-4xl dark:text-white opacity-90 max-lg:mb-8 max-sm:mb-0 dark:bg-none max-lg:text-center rounded-md xl:scale-125 xl:mr-32 '>About Us</h1>
            
            <div className='flex justify-center items-center w-full h-full'>
              <div className='relative w-[310px] h-[210px] justify-center lg:self-start items-center flex'>
                <img src={Printer} alt="3d Printer" className='w-[300px] h-[200px] max-sm:scale-75 z-10 rounded-md xl:scale-125 lg:self-end shadow-md shadow-zinc-600'/>
                <div className='absolute inset-0 w-[310px] h-[210px]'></div>
              </div>
            </div>
          </div>
        </div>
        <NavBar/>
        <div className='mx-[15%] mb-[10vh] border-orange-400 flex flex-col items-center justify-center max-md:px-4 max-,d:py-4 border-x-4 rounded-md p-16 bg-zinc-800 dark:bg-zinc-900'>
          <div>
            <img src={mainLogo} alt='SnappLabs' className='md:w-[400px] w-[300px] opacity-100 mb-4'/>
          </div>

          <h1 className='text-start text-gray-100 dark:text-gray-200 indent-12 pb-8 pt-4 text-2xl max-md:text-sm mb-2'> Founded in 2019, Snapp Labs started as a small print on demand 3d printing shop run by a high school student. With an increasing interest in other areas such as CNC machining, CAD, and laser engraving, the company made the pivot to a rapid prototyping company in 2023. With more machinery and a broader understanding of fabrication workflows in both hobbyist and commercial applications, Snapp Labs decided to add software development and print recycling to the evergrowing arsenal of projects. Committed to reducing plastic waste, Snapp Labs is creating a low-cost recycling setup for hobbyists, while at the same time developing a software for both hobbyists and commercial needs. Snapp Labs is here to forge success for the present and future of 3D printing. We strive to make 3D printing simple and eco-friendly, so everyone can create while reducing their carbon footprint. </h1>
          <div className='w-32 max-md:w-36 h-1 rounded-lg self-center justify-self-center bg-orange-400 mb-2'/>
        </div> 
      <ContSoci/> 
      

    </div>
    
  )
}

export default aboutUs