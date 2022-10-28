import React from 'react'

const HeroTop = () => {
  return (
    <div className='py-8 mt-4 flex flex-col'>
      <div className=''>
        <h1 className='text-white text-5xl font-bold'>We will <span className='text-[#FF6913]'>deliver</span> your package all over <span className='text-[#FF6913]'>the world</span> </h1>
      </div>
      <div className='mt-4 py-4'>
        <p className='text-lg text-[#515151] text-justify'>The faster, easiest way to book and manage your international shipments</p>
        <a className='bg-[#FF6913] px-4 py-4 mt-8 rounded-lg flex items-center justify-center'>
          Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" ml-2 bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
        </a>
      </div>
    </div>
  )
}

export default HeroTop