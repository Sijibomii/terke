import React from 'react'

const HeroBottom = () => {
  return (
    <div>
      <div className='bg-[#222222] rounded-lg shadow-current px-3 py-4'>
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

        <div className='bg-[#29292] rounded-lg shadow-curent px-2 py-4 mt-8'>
          <h4>Track Shipment</h4>
          
        </div>
      </div>
    </div>
  )
}

export default HeroBottom