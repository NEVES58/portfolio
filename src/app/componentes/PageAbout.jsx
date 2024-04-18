import React from 'react'

function PageAbout() {
  return (
    <div id="PageAbout" className='bg-[#000F26] flex flex-row items-center justify-evenly p-20'> 
        <div className='text-white text-center font-bold'>
            <h2 className='text-3xl'>Hello! I`m João Neves,</h2> 
            <p className='text-xl'>
                <br/>a 19-year-old computer engineering student based in Coimbra.<br/> 
                I´m passionate about technology and love tackling new challenges <br/>
                to create innovative solutions.<br/> 
                Let´s connect and build something amazing together!
            </p>
        </div>
        <img src='/fotoPessoal.jpg' className='w-1/6 rounded-full'/>
    </div>
  )
}

export default PageAbout