import React from 'react'

const About = () => {
  return (
    <div className='py-4 mt-4 about px-4 lg:px-8 rounded-xl'>
      <div className='about-top py-4'>
        <h3 className='text-[#FF6913] mb-4'>About Us</h3>
        <h4 className='text-3xl text-white font-bold mb-6 lg:text-7xl'>WHY CHOOSE US.</h4>
        <p className='text'>Because Terke will make it easier for you to send your package with the features we have</p>
      </div>

      <div className='about-bottom py-4 flex flex-col lg:grid lg:grid-cols-3 lg:gap-y-1 lg:gap-x-2'>
        <div className='py-4 px-3 md:py-8 rounded-xl bg-[#FF6913] mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>01</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>REAL TIME TRACKING</h4>
          <p className='calmer-white'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
        <div className='py-4 px-3 md:py-8 rounded-xl about-bg mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>02</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>PICKUP DELIVERY</h4>
          <p className='text'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
        <div className='py-4 px-3 md:py-8 rounded-xl about-bg mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>03</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>INSURANCE SERVICE</h4>
          <p className='text'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
        <div className='py-4 px-3 md:py-8 rounded-xl about-bg mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>04</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>24 HOURS</h4>
          <p className='text'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
        <div className='py-4 px-3 md:py-8 rounded-xl about-bg mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>05</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>PACKAGING</h4>
          <p className='text'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
        <div className='py-4 px-3 md:py-8 rounded-xl about-bg mb-5'>
          <h4 className='text-4xl font-bold text-white mb-3'>06</h4>
          <h4 className='text-2xl font-bold text-white mb-3'>MOBILE APP TRACKER</h4>
          <p className='text'>You can check the status of the shipment in real time by telephone to the Terke hotline 150021000</p>
        </div>
      </div>
    </div>
  )
}

export default About