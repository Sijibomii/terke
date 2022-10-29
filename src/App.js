import Disclamier from "./components/Disclamier";
import Header from "./components/Header";
import HeroTop from "./components/HeroTop";
import HeroBottom from "./components/HeroBottom";
import About from "./components/About";
import About2 from "./components/About2";
import Services from "./components/Services";
import Offices from "./components/Offices";
import Footer from "./components/Footer";
import { useRef } from "react";
function App() {
  const modal = useRef()
  const body = useRef()

  function toggleModal(){
    modal.current.classList.toggle("hidden");
    body.current.classList.toggle("hidden"); 
  }

  return (
    // rememeber to set max-w here
    <div className="App bg-[#141414] max-w-7xl mx-auto px-6">
      <div className="modal hidden h-screen py-16" ref={modal}>
        <div className="top flex items-center justify-between">
          <h1 className='text-[#FF6913] font-bold text-4xl'>terke</h1>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="25" height="25" fill="currentColor" 
          className="bi bi-x text-[#FF6913]" 
          onClick={toggleModal}
          viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
        </div>

        <div className="flex items-center justify-center">
          <ul className="py-4 mt-6 flex items-center flex-col justify-center">
            <li className="text-white font-medium text-2xl py- px-2 mb-6">Home</li>
            <li className="text-white font-medium text-2xl py- px-2 mb-6">About</li>
            <li className="text-white font-medium text-2xl py- px-2 mb-6">Service</li>
            <li className="text-white font-medium text-2xl py- px-2 mb-6">Office</li>
            <li className="rounded-lg bg-[#FF6913] px-8 py-4">Get in touch</li>
          </ul>
        </div>
      </div>
      <div className="body" ref={body}>
        <Disclamier />
        <Header modal={modal} body={body} toggleModal={toggleModal} />
        <HeroTop />
        <HeroBottom />
        <About />
        <About2 />
        <Services />
        <Offices />
        <Footer />
      </div>
        
    </div>
  );
}

export default App;
