import React from 'react'
import Map from "../static/map.JPG"

const Offices = () => {
  return (
    <div className='py-6 mt-8 about px-4 rounded-xl lg:flex lg:flex-col lg:items-center lg:justify-center'>
      <h2 className='text-white text-3xl font-bold mb-6'><span className='text-[#FF6913]'>OUR OFFICES</span> 
      ARE SPREAD THROUGHOUT WORLDWIDE.</h2>
      <p className='calmer-white'>Terke has more than 1000 offices that can serve you to send your package to its destination</p>
      <div className='py-8'>
        <img src={Map} />
      </div>
    </div>
  )
}

export default Offices