import React from 'react'


const Header = ({modal, body, toggleModal}) => {

  
  return (
    <div className='flex items-center justify-between py-2'>
      <div className='logo'>
        <h1 className='text-[#FF6913] font-bold text-4xl'>terke</h1>
      </div>
      <div className='sm-nav'>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="20" height="20" fill="currentColor" className="bi bi-justify text-[#FF6913]" 
        onClick={toggleModal}
        viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> </svg>
      </div>

    </div>
  )
}

export default Header