import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between px-20 py-7 bg-gray-800 text-white w-full text-xl'>
      <h1 className="text-3xl font-bold text-blue-500">JN</h1>
      <nav>
        <ul className='flex gap-8'>
          <li><a href='#PageAbout' className='hover:text-blue-400'>About</a></li>
          <li><a href='#PageSkills' className='hover:text-blue-400'>Skills</a></li>
          <li><a href='#PageProjects' className='hover:text-blue-400'>Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
