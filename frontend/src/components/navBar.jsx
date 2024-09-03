import React from 'react'
import logoIcon from '../assets/logoIcon.webp'
import NavBarSection from './NavBarSection'
import { Link, Route } from 'react-router-dom'

const navBar = ( {className} ) => {
  return (
    <div className='dark:bg-transparent bg-zinc-950 bg-opacity-80 dark:bg-opacity-90 top-2 max-sm:left-3 max-sm:top-3 left-2 w-20 rounded-full h-20 max-sm:h-14 max-sm:w-14 fixed flex-spread z-50 border-orange-300 border-2'>
      <Link className='fixed top-0 left-0 p-4' to='/'>
        <button>
          <img src={logoIcon} className='h-16 max-sm:w-12 max-sm:h-12 transition-all bg-opacity-80 duration-200 rounded-full hover:bg-opacity-100 hover:translate-y-[-2%] hover:scale-105 ' alt="home"/>
        </button>
      </Link>
      <div className='flex-row items-center m-4 h-9 fixed top-0 left-28 bg-opacity-75 md:block hidden bg-zinc-950 rounded-2xl z-40 border-orange-300 border-2 scale-110'>
        <NavBarSection href='../gallery'>Gallery</NavBarSection>
        <NavBarSection href='../comingSoon'>Winder</NavBarSection>  
        <NavBarSection href='../comingSoon'>PrintHub</NavBarSection>
        <NavBarSection href='../serviceInquiry'>Contact Us</NavBarSection>
      </div>
    </div>
  )
}

export default navBar