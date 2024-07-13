import React from 'react'
import logoIcon from '../assets/logoIcon.png'
import NavBarSection from './NavBarSection'
import { Link, Route } from 'react-router-dom'

const navBar = ( {className} ) => {
  return (
    <div className='dark:bg-transparent bg-zinc-950 bg-opacity-80 dark:bg-opacity-90 top-2 left-2 w-20 rounded-full h-20 fixed flex-spread z-50 border-orange-300 border-2'>
      <Link className='fixed top-0 left-0 p-4' to='/'>
        <button>
          <img src={logoIcon} className='h-16 transition-all bg-opacity-80 duration-200 rounded-full hover:bg-opacity-100 hover:translate-y-[-2%] hover:scale-105 ' />
        </button>
      </Link>
      <div className='flex-row items-center m-4 h-10 fixed top-0 left-28 bg-opacity-75 md:block hidden bg-zinc-950 rounded-2xl z-40 border-orange-300 border-2 scale-110'>
        <NavBarSection href='/'>Gallery</NavBarSection>
        <NavBarSection>Winder</NavBarSection>  
        <NavBarSection>PrintHub</NavBarSection>
        <NavBarSection>Contact Us</NavBarSection>
      </div>
    </div>
  )
}

export default navBar