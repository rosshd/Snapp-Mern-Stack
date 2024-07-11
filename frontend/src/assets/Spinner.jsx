import React from 'react';
import logoSpin from './theSnapp.png';

const Spinner = () => {
  return (
    <div>
        <source src={logoSpin} type="video/mp4" className='animate-spin duration-500'/>
    </div>
  )
}

export default Spinner