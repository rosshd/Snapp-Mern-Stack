import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavBarSection = ( { className, href, onClick, children, px, white} ) => {

    const classes = `overflow-hidden text-white h-8 w-auto px-1 mx-2 hover:transition duration-500 ease-out hover:border-b-4 
    hover:-translate-y-1 hover:border-b-orange-600 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ""}`;

    const renderLink = () => (
        <Link to={href}>
            <button className={classes}><span>{children}</span></button>
        </Link>
    )

    const renderWord = () => (
        <button className={classes}><span>{children}</span></button>
    )

    return href
    ? renderLink()
    : renderWord();
};

export default NavBarSection