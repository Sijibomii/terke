import React from 'react'
import terke from '../static/arrow_cleanup.JPG';
import terke_vid from '../static/terke-vid.png';
const About2 = () => {
  return (
    <div className='py-6 mt-4 about px-4 rounded-xl relative'>
      <div className='flex flex-col'>
        <div className=''>
          <h4 className='text-[#FF6913] mb-4'>About Us</h4>
          <h2 className='text-white text-2xl font-bold mb-6'>TERKE IS ONE OF THE BEST SHIPPING AND LOGISTICS COMPANIES.</h2>
          <p className='calmer-white'>Making TERKE as one of the best companies in shipping and logistics </p>
        </div>
        <div className='mt-6 py-2 flex items-center justify-center'>
          <img src={terke} className="h-32" />
        </div>
      </div>

      <div className='flex flex-col py-4 mt-6'>
        <div className='py-2 mb-2'>
          <h3 className='text-white font-bold text-3xl'>100k+</h3>
          <h5 className='calmer-white'>Operational vehicles</h5>
        </div>
        <div className='py-2 mb-2'>
          <h3 className='text-white font-bold text-3xl'>1k+</h3>
          <h5 className='calmer-white'>Office</h5>
        </div>
        <div className='py-2 mb-2'>
          <h3 className='text-white font-bold text-3xl'>10+</h3>
          <h5 className='calmer-white'>Years Experience</h5>
        </div>
        <div className='py-2 mb-2'>
          <h3 className='text-white font-bold text-3xl'>3M+</h3>
          <h5 className='calmer-white'>Happy Client</h5>
        </div>
      </div>

      <div className='absolute right-1 px-3'>
        <img src={terke_vid} />
      </div>
      
    </div>
  )
}

export default About2