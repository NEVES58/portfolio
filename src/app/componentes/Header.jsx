import React from 'react'

function Header() {
    return (
      <div className='flex items-center justify-between px-20 py-7 bg-gray-800 text-white w-full'>
        <h1 className="text-lg font-bold">JN</h1>
        <nav>
          <ul className='flex gap-6'>
            <li>About</li>
            <li>CV</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
    );
  }
  
  
  
  

export default Header