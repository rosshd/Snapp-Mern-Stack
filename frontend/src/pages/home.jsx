import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from '../components/heading'
import NavBar from '../components/navBar'
import Projects from '../components/projectLanding'
import Uses from '../components/uses'

const Home = () => {

  

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    setLoading(true);
    axios   
        .get('http://localhost:3000/')
        .then((res) => {
            setServices(res.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })
  }, [])
  return (
    <div className='bg-zinc-50 dark:bg-zinc-900 h-fit flex flex-col max-w-[100dvw] overflow-auto justify-center items-center'>
        <NavBar />

        <Heading />
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'></div>
        <Projects/>
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'></div>
        <Uses/>
        <div className='w-72 max-md:w-36 h-1 rounded-lg bottom-[100%] self-center justify-self-center bg-orange-300 hidden max-md:block dark:block'></div>
        
    </div>
  )
}

export default Home