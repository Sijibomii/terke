import React from 'react'
import terke from '../static/terke.JPG';
const HeroBottom = () => {
  return (
    <div>
      <div className='bg-[#222222] rounded-3xl shadow-current px-4 py-8'>
        <div className='top flex items-center justify-between'>
          <h4 className='text-[#D0D0D0]'>Shipment Tracking</h4>
          <div className='mr-1'>
            <label class="switch">
              <input className='opacity-0 h-0 w-0' type="checkbox" />
              <span class="slider round absolute top-0 left-0 right-0 bottom-0 bg-transparent"></span>
            </label>
          </div>
          <h4 className='text-[#D0D0D0]'>Shipment rate</h4>
        </div>

        <div className='inner-form rounded-3xl shadow-curent px-4 py-8 mt-8'>
          <h4 className='text-[#D0D0D0] text-lg'>Track Shipment</h4>
          <div className='form'>
            <form className='flex flex-col py-4'>
              <input type="text" className='bg-[#363636] px-4 py-4 rounded-xl'
              placeholder='Enter your shipment code' />
              <select className='mt-4 bg-[#363636] px-4 py-4 rounded-xl' >
                <option value="volvo">Select your services</option>
                
              </select>
              <a href="" className='mt-8 py-4 px-4 bg-[#FF6913] text-center text-white rounded-xl '>Track Now</a>
            </form>
          </div>
        </div>
      </div>

      <div className='mt-4 py-4'>
        <img src={terke} className='' />
      </div>
    </div>
  )
}

export default HeroBottom