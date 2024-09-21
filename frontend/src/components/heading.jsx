import React from 'react';
import Button from './theButton';
import mainLogo from "../assets/mainLogo.webp";
import snappSaber from "../assets/snappSaber.webp";

const Heading = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center max-sm:max-h-[95vh] max-sm:items-center max-sm:justify-center  bg-gradient-to-b md:pt-12 md:px-[10%] md:gap-[5%] from-white max-h-[90vh] to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 md:h-[95vh] max-sm:h-[99vh] max-md:py-8 overflow-hidden">
        
        <div className="flex flex-col items-center max-sm:justify-center max-sm:scale-90 w-full md:w-[50%] rounded-xl drop-shadow-lg dark:bg-transparent">
          <img
            src={mainLogo}
            className="w-[375px] max-h-[74.45px] lg:min-w-[400px] xl:min-w-[600px] xl:max-h-[120px] max-md:my-6 rounded-xl"
            alt="Snapp Labs"
          />
          <h1 className="text-lg font-semibold mb-6 text-end dark:text-white dark:opacity-55 overflow-hidden max-w-[250px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] animate-text-reveal">
            Turning Ideas Into Reality
          </h1>
          <div className="flex mb-0 flex-col sm:justify-start sm:flex-row sm:mb-8 gap-2 justify-center items-center">
            <Button href="/about" className="sm:mr-2">
              <h1>About Us</h1>
            </Button>
            <Button href="/serviceInquiry" className=" flex items-center">
              <span>Get a Quote</span>
              <img
                className="ml-2 w-4 h-4 border-l-[16px] border-l-amber-400 border-y-8 border-y-transparent transition duration-300 ease-in-out"
                alt="->"
                loading="lazy"
              />
            </Button>
          </div>
        </div>
        <div className='flex flex-col items-center max-sm:scale-90 w-full md:w-[50%] rounded-xl drop-shadow-lg dark:bg-transparent'>
          <img
            src={snappSaber}
            className="max-lg:w-[300px] max-lg:h-[170px] max-sm:scale-90 lg:w-[400px] lg:h-[250px] md:justify-self-center md:self-start rounded-lg shadow-"
            alt="3D Printing"
          />
        </div>
        
    </div>
  );
};

export default Heading;

