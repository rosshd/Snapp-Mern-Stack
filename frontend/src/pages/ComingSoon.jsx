import React from 'react'
import theSnapp from '../assets/theSnapp.webp'
import Navbar from '../components/navBar'

const ComingSoon = () => {
  return (
    <div className= 'flex flex-row justify-center items-center bg-gradient-to-b gap-[2dvw] dark:to-zinc-900 dark:from-zinc-800 to-zinc-300 from-zinc-50 transition-colors dark:bg-zinc-900 h-screen overflow-hidden'>
        <h1 className='dark:text-white'>Coming soon</h1>
        <Navbar/>
    </div>
  )
}

export default ComingSoon