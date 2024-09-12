import React, { useState, useRef, useEffect } from 'react';
import logoIcon from '../assets/logoIcon.webp';
import NavBarSection from './NavBarSection';
import { Link } from 'react-router-dom';

const NavBar = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null); // Ref to the nav bar

  const showItems = () => {
    setIsActive(true);
  };

  const closeItems = () => {
    setIsActive(false);
  };

  // Effect to handle clicks outside the nav bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`dark:bg-transparent bg-zinc-950 bg-opacity-80 dark:bg-opacity-90 top-2 max-sm:left-3 max-sm:top-3 left-2 w-20 rounded-full h-20 max-sm:h-14 max-sm:w-14 fixed flex flex-col items-center z-50 border-orange-300 border-2 ${className}`}>
      
      <div className='hidden sm:block'>
        <Link className='fixed top-0 left-0 p-4' to='/'>
          <button>
            <img src={logoIcon} className='h-16 max-sm:w-12 max-sm:h-12 transition-all bg-opacity-80 duration-200 rounded-full hover:bg-opacity-100 hover:translate-y-[-2%] hover:scale-105' alt="home"/>
          </button>
        </Link>
        <div className='flex-row items-center m-4 h-auto fixed top-0 left-28 bg-opacity-75 bg-zinc-950 rounded-2xl z-40 border-orange-300 border-2 scale-110'>
          <NavBarSection href='../gallery'>Gallery</NavBarSection>
          <NavBarSection href='../comingSoon'>Winder</NavBarSection>  
          <NavBarSection href='../comingSoon'>PrintHub</NavBarSection>
          <NavBarSection href='../serviceInquiry'>Contact Us</NavBarSection>
        </div>
      </div>

      <button className='sm:hidden fixed top-0 left-0 p-4 hover:scale-105' onClick={isActive ? closeItems : showItems}>
        <img src={logoIcon} className='h-16 max-sm:w-12 max-sm:h-12 transition-all bg-opacity-80 duration-200 rounded-full hover:bg-opacity-100 hover:translate-y-[-2%]' alt="home"/>
      </button>
      
      {isActive && 
        <div 
          ref={navRef} // Attach ref to the nav bar
          className='sm:hidden flex flex-col items-center fixed top-16 left-2 bg-opacity-75 bg-zinc-950 rounded-2xl z-40 border-orange-300 border-2'
        >
          <NavBarSection href='../'>Home</NavBarSection>
          <NavBarSection href='../gallery'>Gallery</NavBarSection>
          <NavBarSection href='../comingSoon'>Winder</NavBarSection>  
          <NavBarSection href='../comingSoon'>PrintHub</NavBarSection>
          <NavBarSection href='../serviceInquiry'>Contact Us</NavBarSection>
        </div>
      }
    </div>
  );
}

export default NavBar;