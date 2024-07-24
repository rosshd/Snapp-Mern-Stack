import React, { useEffect, useState } from 'react';
import Spinner from '../assets/Spinner.jsx';
import axios from 'axios';
import Navbar from '../components/navBar.jsx';
import Button from '../components/theButton.jsx';
import GalPannel from '../components/galleryImgPannel.jsx';
import ContSo from '../components/contSocials.jsx'

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
      <div key={service._id} className=' flex flex-col flex-wrap w-screen justify-center mb-[10vh] max-md:items-center'>
        <div className={`flex flex-row max-md:flex-col max-md:p-12 justify-center items-center px-2 py-4 rounded-md overflow-hidden bg-zinc-800 dark:bg-zinc-900 max-md:bg-opacity-95 border-orange-300 max-h-[60vh] max-md:max-h-[85vh] max-w-[60dvw] max-md:max-w-[75dvw] border-y-8 ${isLeftDiv ? 'md:self-start' : 'md:self-end'}`}>
          <div className='h-full flex max-md:max-w-[100%] max-w-[40%]'>
            <GalPannel files={service.File} />
          </div>
          <div className='h-full max-md:w-[100%] md:max-w-[55%] rounded-lg py-4 px-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent'>
            <h1 className='text-white text-start text-2xl mb-4 font-bold'>{service.Title}</h1>
            <h1 className='text-white text-opacity-50 text-xs text-start indent-4 mb-4'>{service.Description}</h1>
            {service.Link ? (
              <Button href={service.Link} className='h-12'>
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
    <div className='w-screen dark:from-zinc-950 dark:to-zinc-900 dark:bg-gradient-to-r h-screen bg-zinc-300 pt-16 mb-12 items-center justify-center overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent'>
      <Navbar />
      <h1 className='text-center font-rancho text-9xl text-black rounded-2xl mb-[15vh] mt-4 dark:text-white'>Gallery</h1>
      {loading ? (
        <div className='h-[80vh] dark:bg-zinc-800 bg-zinc-200 flex items-center justify-center'>
          <Spinner className='translate-y-[100px]' />
        </div>
      ) : (
        services.map((service, index) => renderService(service, index))
      )}
      <ContSo />
    </div>
  );
};

export default ServicePage;