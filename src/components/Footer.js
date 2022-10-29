import React from 'react'

const Footer = () => {
  return (
    <div className='py-6 mt-8 about px-4 rounded-xl '>
      <div className='flex flex-col items-center justify-center py-4'>
        <h2 className='text-3xl font-bold text-white'>LET US DELIVER YOUR PACKAGE TO ITS DESTINATION</h2>
        <div className='flex flex-col items-center justify-center'>
          <a className='bg-[#FF6913] btn-shadow px-4 py-4 mt-8 rounded-2xl flex items-center justify-center'>
            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" ml-2 bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
          </a>
          <a className='bg-white px-4 py-4 mt-8 rounded-2xl flex items-center justify-center'>
          Download the app <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" ml-2 bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
        </a>
        </div>
      </div>

      <div className='footer py-5 mt-10'>
        <div className=''>
          <h1 className='text-4xl font-bold text-white mb-4'>terke</h1>
          <h4 className='calmer-white mb-6'>The faster, easiest way to book and manage your international shipments.</h4>
        </div>
        <div className="py-4">
          <ul>
            <li className='text-white text-xl py-2'>Home</li>
            <li className='calmer-white text-xl py-2'>About us</li>
            <li className='calmer-white text-xl py-2'>Services</li>
            <li className='calmer-white text-xl py-2'>Office</li>
          </ul>
        </div>

        <div className="py-4">
          <ul>
            <li className='text-white text-xl py-2'>Licience</li>
            <li className='calmer-white text-xl py-2'>Privacy policy</li>
            <li className='calmer-white text-xl py-2'>Copyright</li>
            <li className='calmer-white text-xl py-2'>Email Address</li>
          </ul>
        </div>

        <div className="">
          <ul>
            <li className='text-white text-xl py-2'>Social Media</li>
            <li className='calmer-white text-xl py-2'>Instagram</li>
            <li className='calmer-white text-xl py-2'>Facebook</li>
            <li className='calmer-white text-xl py-2'>Twitter</li>
          </ul>
        </div>

        <div className="">
          <h4 className='calmer-white text-xl py-2'>&copy; 2022 Terke. All rights reserved</h4>
        </div>

      </div>

    </div>
  )
}

export default Footer