import React, { useState, useRef } from 'react'
import Container from '../static/container.png'
const Services = () => {
  const accord1 = useRef()
  const accord2 = useRef()
  const accord3 = useRef()
  const [accordion, setAccordion] = useState({
    0: {
      element: accord1
    },
    1: {
      element: accord2
    },
    2:{
      element: accord3
    }
    
  })

  function toggleAccordion(id){
    const { element } = accordion[id]

    const [div, div2] = element.current.children; 
    
    const tags = div.getElementsByTagName('svg') // this returns an htmlcollection
    //convert to an array so we can loop
    const tagsArr = [...tags]
    tagsArr.map((el)=>{
      el.classList.toggle("hidden");
    })
    div2.classList.toggle("hidden");

    
    
  }

  return (
    <div className='py-6 mt-4 px-4 mt-28'>
      <h4 className='text-[#FF6913] mb-4'>Services</h4>
      <h2 className='text-white text-3xl font-bold mb-6'>MANAGE YOUR PACKAGE FROM LOCAL <span className='text-[#FF6913]'>TO THE WORLD.</span> </h2>
      <p className='calmer-white'>Terke is a logostics provider of integrated freight solutions. Terke provides dedicated frieght solutions 
        including: less than Truck Load, Warehousing/Fulfillment, Drayage, and Transloading.
      </p>

      <div className='flex flex-col py-4 mt-8'>
        <div className='bg-white rounded-xl'>
          <img src={Container} />
        </div>
        <div className='mt-16'>
          <div className=''>
            <div className='border-y-white py-4' onClick={() => toggleAccordion(0)} ref={accord1}>
              <div className='flex items-center justify-center pb-6'>
                <h3 className='text-white text-3xl font-bold'><span className='text-[#FF6913]'> Worldwide</span> Shipping</h3>
                {/* up */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="hidden text-white font-bold bi bi-arrow-up-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/> </svg>
                {/* down */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" text-white font-bold bi bi-arrow-down-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/> </svg>
              </div>
              <div className='accord-details hidden'>
                <p className='calmer-white'>Not only serving inner city delivery, but TERKE also serves inter-country 
                delivery at an affordable rate</p>
              </div>
            </div>

            <div className='border-y-white py-4' onClick={() => toggleAccordion(1)} ref={accord2}>
              <div className='flex items-center justify-between pb-6'>
                <h3 className='text-white text-3xl font-bold'><span className='text-[#FF6913]'> Sea</span> Shipping</h3>
                {/* up */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="hidden text-white font-bold bi bi-arrow-up-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/> </svg>
                {/* down */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" text-white font-bold bi bi-arrow-down-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/> </svg>
              </div>
              <div className='accord-details hidden'>
                <p className='calmer-white'>Not only serving inner city delivery, but TERKE also serves inter-country 
                delivery at an affordable rate</p>
              </div>
            </div>

            <div className='border-y-white py-4' onClick={() => toggleAccordion(2)} ref={accord3}>
              <div className='flex items-center justify-center pb-6'>
                <h3 className='text-white text-3xl font-bold'><span className='text-[#FF6913]'> Ground</span> Shipping</h3>
                {/* up */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="hidden text-white font-bold bi bi-arrow-up-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/> </svg>
                {/* down */}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" text-white font-bold bi bi-arrow-down-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/> </svg>
              </div>
              <div className='accord-details hidden'>
                <p className='calmer-white'>Not only serving inner city delivery, but TERKE also serves inter-country 
                delivery at an affordable rate</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services