import React from 'react';
import Button from './theButton';

const Heading = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center bg-gradient-to-b py-[100px] from-white max-h-[90vh] to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 md:h-[95vh] overflow-hidden">
        
        <div className="flex flex-col items-center w-full md:w-[50%] rounded-xl drop-shadow-lg dark:bg-transparent">
          <img
            src="../src/assets/mainLogo.webp"
            className="w-[375px] max-h-[74.45px] lg:min-w-[400px] xl:min-w-[600px] xl:max-h-[120px] max-md:my-6 rounded-xl"
            alt="Snapp Labs"
          />
          <h1 className="text-lg font-semibold mb-6 text-end dark:text-white dark:opacity-55 overflow-hidden max-w-[250px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] animate-text-reveal">
            Turning Ideas Into Reality
          </h1>
          <div className="flex flex-col mb-8 sm:flex-row gap-2 justify-center items-center">
            <Button href="/about" className="sm:mr-2">
              <h1>About Us</h1>
            </Button>
            <Button href="/serviceInquiry" className="sm:ml-2 flex items-center">
              <span>Get a Quote</span>
              <img
                className="ml-2 w-4 h-4 border-l-[16px] border-l-amber-400 border-y-8 border-y-transparent transition duration-300 ease-in-out"
                alt="->"
                loading="lazy"
              />
            </Button>
          </div>
        </div>

        <img
          src="../src/assets/snappSaber.webp"
          className="w-[300px] h-[170px] xl:w-[600px] xl:h-[375px] md:justify-self-center mt-8 rounded-lg shadow-"
          alt="3D Printing"
        />
    </div>
  );
};

export default Heading;

