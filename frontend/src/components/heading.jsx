import React from 'react';
import Button from './theButton';

const Heading = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center max-md:gap-20 max-md:pt-12 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-screen max-md:py-8">

      {/* Left Section */}
      <div className="flex flex-col items-center gap-4 justify-end w-full md:w-[40%]">
        <img
          src="/assets/mainLogo.webp"
          className="w-[375px] h-[74.45px] xl:w-[600px] xl:h-[120px] max-md:my-6"
          alt="Snapp Labs"
        />
        <h1 className="text-lg font-semibold mb-6 text-center dark:text-white dark:opacity-55 max-w-[600px]">
          Turning Ideas Into Reality
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <Button href="/about" className="sm:mr-2">
            <h1>About Us</h1>
          </Button>
          <Button href="/serviceInquiry" className="flex items-center">
            <span>Get a Quote</span>
            <img
              className="ml-2 w-4 h-4 border-l-[16px] border-l-amber-400 border-y-8 border-y-transparent"
              alt="->"
              loading="lazy"
            />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center w-full md:w-[40%]">
        <img
          src="/assets/snappSaber.webp"
          className="max-lg:w-[300px] max-lg:h-[170px] lg:w-[500px] lg:h-[300px] rounded-lg border-2"
          alt="3D Printing"
        />
      </div>
      
    </div>
  );
};

export default Heading;
