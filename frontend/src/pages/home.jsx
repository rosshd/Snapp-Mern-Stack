import React, { Suspense, lazy } from 'react';
import Heading from '../components/heading';

// Lazy load components
const NavBar = lazy(() => import('../components/navBar'));
const Projects = lazy(() => import('../components/projectLanding'));
const Uses = lazy(() => import('../components/uses'));
const ContSoci = lazy(() => import('../components/contSocials'));

const Home = () => {
  return (
    <div className='scrollbar-thin scroll h-screen overflow-x-hidden overflow-y-scroll bg-zinc-300  scrollbar-thumb-amber-400 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent 
    w-screen dark:bg-zinc-900 justify-center items-center'>
  
      <Heading />
      
        <NavBar />
      
        <div className='w-screen h-1 bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'/>
        </div>
      <Projects />
      
      <Suspense fallback={<div>Loading Uses...</div>}>
        <div className='w-screen flex h-1 bg-zinc-300 dark:bg-zinc-900 flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-amber-400 hidden max-md:block dark:block'/>
        </div>
      <Uses />
      </Suspense>
      
      <Suspense fallback={<div>Loading Contact & Socials...</div>}>
        <div className='w-screen flex h-1 bg-zinc-300 dark:bg-zinc-900 flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-amber-400 hidden max-md:block dark:block'/>
        </div>
      <ContSoci />
      </Suspense>
    </div>
  );
}

export default Home;
