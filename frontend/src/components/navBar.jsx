import React from 'react'
import logoIcon from '../assets/logoIcon.png'
import NavBarSection from './NavBarSection'
import { Link, Route } from 'react-router-dom'

const navBar = ( {className} ) => {
  const classes = `fixed top-0 left-0 flex-spread w-screen border-b-20 z-50 ${className || ""}`;
  return (
    <div className={classes}>
      <Link className='fixed top-0 right-0 p-4' to='/'>
        <button>
          <img src={logoIcon} className='h-16 transition-all bg-opacity-80 duration-200 rounded-full hover:bg-opacity-100 hover:translate-y-[-2%] hover:scale-105 ' />
        </button>
      </Link>
      <div className='flex-row-reverse items-center m-4 h-14 fixed top-0 right-20 md:block hidden'>
        <NavBarSection>navbar</NavBarSection>
        <NavBarSection>navbar</NavBarSection>  
        <NavBarSection>navbar</NavBarSection>
        <NavBarSection>navbar</NavBarSection>
      </div>
    </div>
  )
}

export default navBar