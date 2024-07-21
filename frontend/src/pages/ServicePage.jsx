import React, { useEffect, useState } from 'react';
import Spinner from '../assets/Spinner.jsx';
import axios from 'axios';
import Navbar from '../components/navBar.jsx';
import Button from '../components/theButton.jsx';
import GalPannel from '../components/galleryImgPannel.jsx';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/myServices')
      .then((response) => {
        setServices(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const renderService = (service, index) => {
    const isLeftDiv = index % 2 === 0;
    return (
      <div key={service._id} className=' flex flex-col flex-wrap w-screen justify-center mb-[10vh] max-md:items-center dark:bg-zinc-800 bg-zinc-300'>
        <div className={`flex flex-row justify-center gap-[5%] items-center w-[70%] py-4 rounded-md overflow-hidden bg-zinc-800 dark:bg-zinc-900 border-orange-300 max-h-[60vh] border-y-8 ${isLeftDiv ? 'md:self-start md:ml-4' : 'md:self-end md:mr-4'}`}>
          <div className='h-full w-[40%]'>
          <GalPannel files={service.File} />
          </div>
          <div className='h-full w-[45%] rounded-lg bg-opacity-20 bg-zinc-900 px-4 flex flex-col items-center overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent'>
            <h1 className='text-white text-center font-bold'>{service.Title}</h1>
            <h1 className='text-white text-xs text-center'>{service.Description}</h1>
            {service.Link ? (
              <Button href={service.Link}>
                <h1 className='text-xs opacity-85'>See here</h1>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-screen dark:bg-zinc-800 h-screen bg-zinc-300 pt-16 mb-12 items-center justify-center overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent'>
      <Navbar />
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl mb-8 mt-4 dark:text-white'>Gallery</h1>
      {loading ? (
        <div className='h-[80vh] dark:bg-zinc-800 bg-zinc-200 flex items-center justify-center'>
          <Spinner className='translate-y-[100px]' />
        </div>
      ) : (
        services.map((service, index) => renderService(service, index))
      )}
    </div>
  );
};

export default ServicePage;