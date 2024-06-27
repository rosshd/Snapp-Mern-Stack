import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Heading from '../components/heading'
import NavBar from '../components/navBar'
import Projects from '../components/projectLanding'

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
    <div>
        <NavBar />
        <Heading />
        <Projects />


        <div className='flex-row items-center w-dvw h-dvh bg-gray-400 min-h-dvh'>
            <h1>hey</h1>
        </div>
        
    </div>
  )
}

export default Home