import React, { Suspense, lazy } from 'react';
import Heading from '../components/heading';
import NavBar from '../components/navBar';
const Projects = lazy(() => import('../components/projectLanding'));
const Uses = lazy(() => import('../components/uses'));
import ContSoci from '../components/contSocials';

const Home = () => {
  return (
    <div className='overflow-y-auto bg-zinc-300 dark:bg-zinc-900 justify-center items-center'>
  
      <Heading />
      
        <NavBar />
      
        <div className='w-screen h-1 bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'/>
        </div>
      <Projects />
      
        <div className='w-screen flex h-1 bg-zinc-300 dark:bg-zinc-900 flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-amber-400 hidden max-md:block dark:block'/>
        </div>
      <Uses />
      
        <div className='w-screen flex h-1 bg-zinc-300 dark:bg-zinc-900 flex-col justify-center items-center'>
          <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-amber-400 hidden max-md:block dark:block'/>
        </div>
      <ContSoci />
    </div>
  );
}

export default Home;
