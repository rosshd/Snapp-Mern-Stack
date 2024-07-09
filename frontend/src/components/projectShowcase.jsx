import React from 'react'

const projectShowcase = ( { className, children, href } ) => {
  
const classes = ` 
${className || ""}`;

  const project = () => {
    <div >
      <span>{children}</span>
    </div>
  }
    
    return project();
}

export default projectShowcase