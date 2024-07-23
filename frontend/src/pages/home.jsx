import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from '../components/heading'
import NavBar from '../components/navBar'
import Projects from '../components/projectLanding'
import Uses from '../components/uses'
import ContSoci from '../components/contSocials'

const Home = () => {
  
  return (
    <div className=' scrollbar-thin scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent 
    w-screen bg-zinc-300 dark:bg-zinc-900 justify-center items-center '>
  
      <Heading/>
      <NavBar />
      <div className='w-screen flex flex-col justify-center items-center'>
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'/>
      </div>
      <Projects/>
      <div className='w-screen flex flex-col mb-12 justify-center items-center'>
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'/>
      </div>
      <Uses/>
      <div className='w-screen flex flex-col justify-center items-center'>
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'/>
      </div>
      <ContSoci/>
    </div>
  )
}

export default Home