import React from 'react'
import Printer from '../assets/3DPrint.webp'
import ContSoci from '../components/contSocials'
import mainLogo from '../assets/mainLogo.webp'
import NavBar from '../components/navBar'

const aboutUs = () => {
  return (
    <div className=' scrollbar-thin scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent 
    w-screen bg-zinc-200 dark:bg-zinc-900 justify-center items-center py-8'>
        <div className='h-[50vh] w-screen flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 mb-[18%]'>
          <h1 className='text-8xl dark:text-white opacity-90 dark:bg-none rounded-md xl:scale-125 mr-8 xl:mr-32 lg:self-end border-orange-400 border-b-4 drop-shadow-md'>About Us</h1>
          <img src={Printer} alt="3d Printer" className='w-[300px] h-[200px] rounded-md xl:scale-125 lg:self-end shadow-md shadow-zinc-600 z-10'/>
        </div>
        <NavBar/>
        <div className='mx-[15%] mb-[10vh] border-orange-400 flex flex-col items-center justify-center border-y-2 rounded-md p-8 dark:bg-zinc-900 bg-zinc-400 bg-opacity-80'>
          <div>
            <img src={mainLogo} alt='SnappLabs' className='md:w-[400px] w-[300px] opacity-100 mb-4'/>
          </div>

          <h1 className='text-start text-zinc-800 dark:text-gray-200 indent-12 pb-8 pt-4 text-2xl text-opacity-50 mb-2'> Founded in 2019, Snapp Labs started as a small print on demand 3d printing shop run by a high school student. With an increasing interest in other areas such as CNC machining, CAD, and laser engraving, the company made the pivot to a rapid prototyping company in 2023. With more machinery and a broader understanding of fabrication workflows in both hobbyist and commercial applications, Snapp Labs decided to add software development and print recycling to the evergrowing arsenal of projects. Committed to reducing plastic waste, Snapp Labs is creating a low-cost recycling setup for hobbyists and software for both hobbyists and commercial needs. Snapp Labs is here to change the world for the better, striving to make 3d printing more eco-friendly and easier to use than ever before - so everyone can enjoy creating with a reduced carbon footprint.</h1>
          <div className='w-32 max-md:w-36 h-1 rounded-lg self-center justify-self-center bg-orange-400 mb-2'/>
        </div> 
      <ContSoci/> 
      

    </div>
    
  )
}

export default aboutUs