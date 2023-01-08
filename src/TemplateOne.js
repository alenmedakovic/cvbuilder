import React from 'react';
import profilePic from "./photos/profilePic.png";
import dotIcon from "./photos/dot.png";



function TemplateOne() {
  return (
    <div id="template-one" className="h-screen w-screen">
      <div className="bg-orange-300 w-full h-16">
        <div className="bg-black border-r-8 sm:border-r-4 border-white text-white w-1/7 h-full mx-start" style={{float: 'left'}}>
        <img className="object-fill h-full w-full"  src={profilePic} />
        </div>
        <div className="bg-orange-300 h-full mx-auto w-1/4" style={{float: 'left'}}>
          <p className="text-4xl sm:text-2xl text-left text-white font-serif mt-2 ml-4 sm:mt-1 sm:ml-2">Alen Medakovic</p>
        </div>
      </div>
      <div className="ml-24 h-1/4 mt-10 bg-white w-3/6 sm:ml-16 sm:mt-3 sm:h-20">
        <div className="bg-gray-800 h-1/6 w-1/4 sm:w-14 sm:text-base sm:h-4">
          <h1 className="text-white text-l text-center font-serif">Details</h1>
          </div>
          <p className="text-black text-m mt-2 font-serif sm:mt-1 sm:text-sm">Lundheimsveien 23, Moi 4460</p>
          <p className="text-black text-m w-full font-serif sm:text-sm">Norway</p>
          <p className="text-black text-m mt-2 sm:mt-1 w-full font-serif sm:text-sm">alenmedakovic@icloud.com</p>
          <p className="text-black text-m w-full font-serif sm:text-sm">+47 41183195</p>
        </div>
        <div className="ml-24 h-1/4 mt-10 bg-white w-5/6 sm:ml-16 sm:mt-3 sm:w-1/4 sm:h-16">
          <div className="bg-gray-800 h-1/6 w-1/6 sm:w-14 sm:h-4 sm:text-base">
            <h1 className="text-white text-l text-center font-serif">Profile</h1>
          </div>
          <p className="text-black text-m mt-1 font-serif sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit ipsum
           nec nibh lacinia sagittis. Aenean condimentum odio luctus, vulputate libero ac,
            ultricies urna. Sed quis tellus cursus magna rhoncus rutrum et eu sapien. In
             hac habitasse platea dictumst. Aliquam consequat orci sed mauris semper dictum
          </p>
        </div>
        <div className="ml-24 h-1/4 mt-10 bg-white w-5/6 flex-auto sm:mt-8 sm:ml-16 sm:h-28">
        <div className="bg-gray-800 max-w-xs h-1/6 w-1/4 sm:w-20 sm:h-4 sm:text-base">
          <h1 className="text-white text-l text-center sm:mr-1 font-serif">Education</h1>
        </div>
        <p className="text-black text-xl font-serif mt-2 sm:mt-1 sm:text-base">Higschool Diploma, Flekkefjord VGS</p>
        <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block">
          <p className="text-black text-m font-serif sm:text-sm">Graduated Honor Roll</p>
        </div>
        <div className="mt-1 ml-2 h-1/6 w-10 sm:w-7 bg-white sm:mt-0 sm:h-4 inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:mt-2.5 sm:h-2 sm:w-7" src={dotIcon} alt="dot" />
        </div>
        <p className="text-black text-xl font-serif sm:text-base">Masters Degree, Computer Science, Oxford</p>
        <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block">
          <p className="text-black text-m font-serif sm:text-sm">Specialized in Python aswell as Swift</p>
        </div>
        <div className="mt-1 ml-2 h-1/6 w-10 sm:w-7 sm:h-4 bg-white inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:h-2 sm:w-7 sm:mt-1.5" src={dotIcon} alt="dot" />
         </div>
        </div>
        <div className="ml-24 h-1/4 mt-10 bg-white w-5/6 sm:w-1/4 sm:mt-0 sm:ml-16 sm:h-28">
        <div className="bg-gray-800 h-1/6 w-1/2 max-w-xs sm:text-base sm:h-4 sm:w-36">
          <h1 className="text-white text-l ml-6 text-start font-serif sm:ml-3">Employment History</h1>
        </div>
        <div className="mt-1 sm:mt-1 ml-2 h-1/6 w-10 sm:w-7 sm:h-4 bg-white inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:h-2 sm:w-7 sm:mt-1.5" src={dotIcon} alt="dot" />
          <div className="mt-1 sm:mt-2.5 h-1/6 w-10 sm:w-7 sm:h-4 bg-white inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:h-2 sm:w-7 sm:mt-1.5" src={dotIcon} alt="dot" />
          <div className="mt-1 sm:mt-3 h-1/6 w-10 sm:w-7 sm:h-4 bg-white inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:h-2 sm:w-7 sm:mt-1.5" src={dotIcon} alt="dot" />
          <div className="mt-1 sm:mt-3.5 h-1/6 w-10 sm:w-7 sm:h-4 bg-white inline-block" style={{float: "left"}}>
          <img className="mt-1 sm:h-2 sm:w-7 sm:mt-1.5" src={dotIcon} alt="dot" />
          </div>
          </div>
          </div>  
          </div>
          <div className="h-8 w-4/5 sm:h-4 bg-white inline-block">
            <p className="sm:text-sm sm:content-fill">Painting, Woodwork, Gilje AS for five years.</p>
          </div>
          <div className="h-8 sm:mb-0 sm:ml-9 w-4/5 sm:h-4 bg-white inline-block">
          <p className="sm:text-sm sm:content-fill">Painting, Woodwork, Gilje AS for five years.</p>
          </div>
          <div className="h-8 sm:mt-2 sm:ml-9 w-4/5 sm:h-4 bg-white inline-block">
          <p className="sm:text-sm sm:content-fill">Painting, Woodwork, Gilje AS for five years.</p>
          </div>
          <div className="h-8 sm:mt-3 sm:ml-9 w-4/5 sm:h-4 bg-white inline-block">
          <p className="sm:text-sm sm:content-fill">Painting, Woodwork, Gilje AS for five years.</p>
          </div>
        </div>
        <div className="bg-white sm:h-24 sm:w-48 sm:ml-14 sm:mt-4">
        <div className="bg-gray-800 h-1/6 w-1/2 max-w-xs sm:ml-1.5 sm:text-base sm:h-4 sm:w-16">
          <h1 className="text-white sm:text-l sm:text-center font-serif">Skills</h1>
        </div>
        <p className="sm:text-base sm:ml-5 sm:mt-1 sm:mb-0.5 font-serif">Communication skills</p>
        <div className="sm:relative sm:pt-0 sm:w-36">
          <div className="sm:ml-4 sm:overflow-hidden sm:h-2 sm:text-xs sm:flex sm:rounded sm:bg-gray-300">
           <div style={{ width: "30%" }} className="sm:shadow-none sm:flex sm:flex-col sm:text-center sm:whitespace-nowrap sm:text-white sm:justify-center sm:bg-yellow-500"></div>
        </div>
        </div>
        <p className="sm:text-base sm:ml-5 sm:mt-2 font-serif">Social Media Marketing</p>
        <div className="sm:relative sm:mt-0.5 sm:pt-0 sm:w-36">
          <div className="sm:ml-4 sm:overflow-hidden sm:h-2 sm:text-xs sm:flex sm:rounded sm:bg-gray-300">
           <div style={{ width: "80%" }} className="sm:shadow-none sm:flex sm:flex-col sm:text-center sm:whitespace-nowrap sm:text-white sm:justify-center sm:bg-yellow-500"></div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default TemplateOne;