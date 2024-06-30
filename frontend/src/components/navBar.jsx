import React from 'react'
import logoIcon from '../assets/logoIcon.png'
import NavBarSection from './NavBarSection'
import { Link, Route } from 'react-router-dom'

const navBar = () => {
  return (
    <div className='fixed top-0 left-0 flex-spread w-screen border-b-20 '>
        <div className='md:block hidden'>
            <div className='flex flex-row-reverse items-center m-4 h-14 fixed top-0 right-0'>

              <Link to='/'>
                <button><img src={logoIcon} className='h-20' /></button>
              </Link>
              <NavBarSection>navbar</NavBarSection>
              <NavBarSection>navbar</NavBarSection>  
              <NavBarSection>navbar</NavBarSection>
              <NavBarSection>navbar</NavBarSection>
            </div>
        </div>
    </div>
  )
}

export default navBar