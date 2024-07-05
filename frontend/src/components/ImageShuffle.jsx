import React, { useEffect, useState }  from 'react'
import { Link, Route } from 'react-router-dom'



const ImageScroller = ( {className, children, onClick} ) => {

    const classes = `items-center justify-center
    ${className || ""}
    `;

    const spanClasses = 'relative';

    const ImageShuffle = () => (
        <button className={classes}>
            <span className='flex-row flex'>{children}</span>
        </button>
    )

    const nonShuffle = () => (
        <button className={classes}> 
            <span className='flex-row flex flex-wrap items-center'>{children}</span>
        </button>
    )

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ?
        nonShuffle()
    :   ImageShuffle();
       
}

export default ImageScroller