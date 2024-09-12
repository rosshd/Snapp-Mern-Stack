import React, { useState } from 'react';
import art from '../assets/icons/art.webp';
import education from '../assets/icons/education.webp';
import goods from '../assets/icons/goods.webp';
import healthcare from '../assets/icons/healthcare.webp';
import theatre from '../assets/icons/theatre.webp';
import tools from '../assets/icons/tools.webp';
import manufacturing from '../assets/icons/manufacturing.webp';
import plane from '../assets/icons/plane.webp';
import UsesBox from '../assets/UsesBox';

const usesData = [
  {
    key: 'art',
    src: art,
    title: 'Iron Man Zombie Helmet',
    info: `    Using models from @piercepopculturedesigns on Instagram, this piece was expertly 3D printed, sanded, and painted as a showcase of our exceptional painting abilities. A combination of Metalcast spray paints on top of a Duralumen chrome undercoat created the perfect dark metallic shine on the helmet. For the faceplate, a gloss black undercoat combined with Rustoleum gold spray paint achieved the beautiful gold color similar to that used in the Iron Man films. The skull was airbrushed with bone white and matte white paints, and hand-painted with blood red and matte black paints. A black wash and some weathering techniques gave the skull its final deathly and worn finish. Parts of the helmet were touched up with chrome, gunmetal, and bronze paint to achieve a more realistic look.`
  },
  {
    key: 'Education',
    src: education,
    title: 'Cross Section Viewers for Hillgrove High School',
    info: `    In order to help geometry students better visualize and understand cross sections, Snapp Labs donated models of shapes cut into the cross sections required by the standards of the class. This way, students were better able to grasp the concepts of the various ways 2D shapes create 3D objects.`
  },
  {
    key: 'Goods',
    src: goods,
    title: 'LED Mic Flags',
    info: `    Working closely with client La’Victor Isaac, his idea of an LED mic flag was quickly brought to life. The design was modeled in Fusion 360, then 3D printed and assembled in-house. We sourced a light manufacturer for Mr. Isaac and manufactured several pieces to be sent overseas as example products to obtain quotes for a large production run.`
  },
  {
    key: 'Theatre',
    src: theatre,
    title: 'Iron Man Suit',
    info: `    This full upper body suit, complete with lights and motorization, was a large dedication of both materials and time. It showcases commitment, artistic ability, and problem-solving skills, which were essential in making this project a reality. The full guide on how this project was made can be found using the link below.
https://www.instructables.com/3D-Printed-Iron-Man-Suit/`
  },
  {
    key: 'Aerospace',
    src: plane,
    title: '3D Printed Drone Parts for Camp',
    info: `    On an urgent time crunch after realizing the drone motors purchased for a summer camp were too small for the drone chassis, the Georgia Tech STEP Camp reached out to Snapp Labs for an overnight order of 60 adapters to fit around the motors and make them fit in the drone’s frame. Everything was completed on time, and the future engineers were able to build their delivery drones without timeline issues.`
  },
  {
    key: 'Medicine',
    src: healthcare,
    title: '3D Printed Drone Parts for Camp',
    info: `    On an urgent time crunch after realizing the drone motors purchased for a summer camp were too small for the drone chassis, the Georgia Tech STEP Camp reached out to Snapp Labs for an overnight order of 60 adapters to fit around the motors and make them fit in the drone’s frame. Everything was completed on time, and the future engineers were able to build their delivery drones without timeline issues.`
  },
  {
    key: 'Tools',
    src: tools,
    title: '3D Printed Drone Parts for Camp',
    info: `    On an urgent time crunch after realizing the drone motors purchased for a summer camp were too small for the drone chassis, the Georgia Tech STEP Camp reached out to Snapp Labs for an overnight order of 60 adapters to fit around the motors and make them fit in the drone’s frame. Everything was completed on time, and the future engineers were able to build their delivery drones without timeline issues.`
  },
  {
    key: 'Manufacturing',
    src: manufacturing,
    title: '3D Printed Drone Parts for Camp',
    info: `    On an urgent time crunch after realizing the drone motors purchased for a summer camp were too small for the drone chassis, the Georgia Tech STEP Camp reached out to Snapp Labs for an overnight order of 60 adapters to fit around the motors and make them fit in the drone’s frame. Everything was completed on time, and the future engineers were able to build their delivery drones without timeline issues.`
  },

];

const Uses = () => {
  const [activeBox, setActiveBox] = useState(null);

  return (
    <div className='flex flex-col items-center justify-center pt-[5vh] bg-zinc-300 dark:bg-zinc-900'>
      <h1 className='text-6xl max-sm:text-2xl max-sm:mb-2 text-zinc-900 font-thin underline mb-12 dark:no-underline dark:text-white'>Applications</h1>
      <div className='grid-cols-4 max-md:grid-cols-2 grid gap-[5dvw] xl:gap-[10dvw] xl:pt-[5vh] pb-[10vh] max-md:py-[5vh]'>
        {usesData.map(({ key, src, title, info }) => (
          <UsesBox
            key={key}
            src={src}
            insideInfo={info}
            title={title}
            isActive={activeBox === key}
            setIsActive={() => setActiveBox(activeBox === key ? null : key)}
          >
            <h1 className='text-white text-center capitalize'>{key}</h1>
          </UsesBox>
        ))}
      </div>  
    </div>
  );
}

export default Uses;
