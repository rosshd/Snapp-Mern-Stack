import React from 'react';
import Button from './theButton';
import board1 from '../../public/assets/products/cuttingBoards.webp';
import board2 from '../../public/assets/products/board2.webp';
import iron1 from '../../public/assets/products/ironSuit1.webp';
import keychain from '../../public/assets/products/keychain1.webp';

const ProjectLanding = () => {
  return (
    <div className="flex flex-col items-center mb-[5vh] justify-center bg-gradient-to-b from-zinc-100 to-zinc-300 dark:to-zinc-900 dark:from-zinc-900">
      <div className="flex flex-col items-center w-[66dvw] dark:w-full max-md:w-screen md:py-[5vh] rounded-2xl dark:bg-inherit dark:border-none md:border-x-8 border-amber-400 md:bg-zinc-900 overflow-hidden">

        {/* Conditionally layout the images */}
        <div className="md:relative flex max-md:grid max-md:grid-cols-2 max-md:scale-50 max-md:gap-4 md:flex-row md:overflow-hidden max-md:h-[400px] w-full max-xl:h-[300px] xl:h-[450px] lg:mb-12">
          {/* Images with responsive static layout for smaller screens */}
          <img
            src={board1}
            loading="lazy"
            className="md:absolute max-md:static w-52 h-[220px] xl:w-[302px] xl:h-[319px] border-2 left-[-208px] xl:left-[-312px] bottom-0 border-amber-400 rounded-md shadow-sm md:animate-infinite-scroll"
            alt="Cutting Board 1"
          />
          <img
            src={iron1}
            loading="lazy"
            className="md:absolute max-md:static w-52 h-[276px] xl:w-[302px] xl:h-[401px] border-2 left-[-208px] xl:left-[-312px] bottom-0 border-amber-400 rounded-md shadow-sm md:animate-infinite-scroll md:delay-2000"
            alt="Iron Suit 1"
          />
          <img
            src={board2}
            loading="lazy"
            className="md:absolute max-md:static w-52 h-[276px] xl:w-[302px] xl:h-[401px] border-2 left-[-208px] xl:left-[-312px] bottom-0 border-amber-400 rounded-md shadow-sm md:animate-infinite-scroll md:delay-4000"
            alt="Cutting Board 2"
          />
          <img
            src={keychain}
            loading="lazy"
            className="md:absolute max-md:static w-52 h-[230px] xl:w-[302px] xl:h-[334px] border-2 left-[-208px] xl:left-[-312px] bottom-0 border-amber-400 rounded-md shadow-sm md:animate-infinite-scroll md:delay-6000"
            alt="Keychain"
          />
        </div>

        <div className="flex flex-col items-center px-12 dark:w-[66dvw] max-md:mt-6 max-md:w-full">
          <h1 className="text-center text-lg md:text-xl max-md:bg-transparent dark:bg-none font-semibold md:text-gray-200 text-zinc-900 dark:opacity-80 border-2 border-zinc-400 dark:border-gray-400 p-4 rounded-lg shadow-lg md:max-w-[80dvw] max-md:w-full max-md:text-gray-100">
            Explore limitless creativity with services tailored to bring your wildest ideas to life. Specializing in a wide array of 3D solutions including CAD, 3D printing, CNC machining, laser engraving, and animation, Snapp Labs is well-equipped to create anything you can imagine. If you are interested in seeing some of our work, check out the gallery of completed projects, linked below.
          </h1>
          <Button href="/gallery" className="mt-4 flex items-center">
            <span>Gallery</span>
            <img className="mx-2 w-4 h-4 border-l-[16px] border-l-amber-400 border-y-8 border-y-transparent transition duration-300 ease-in-out" alt="Arrow" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectLanding;
