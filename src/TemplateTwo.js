import React from 'react';
import profilePic from "./photos/profilePic.png";
import dotIcon from "./photos/dot.png";



function TemplateTwo() {
  return (
    <div id="template-two" className="bg-gray-100">
    <div className="bg-blue-800 w-full h-16 flex items-center justify-between px-4 py-3">
      <div className="flex-shrink-0 w-1/7 h-full">
        <img className="object-fill h-full w-full rounded-full" src={profilePic} />
      </div>
      <div className="mx-auto w-1/4 h-full flex items-center">
        <p className="text-4xl sm:text-2xl text-white font-serif">Alen Medakovic</p>
      </div>
    </div>
    <div className="px-4 py-3 w-3/4 mx-auto mt-10 bg-white rounded-md shadow-md">
      <div className="bg-gray-800 h-1/6 w-1/4 sm:w-14 sm:text-base sm:h-4">
        <h1 className="text-white text-l text-center font-serif">Details</h1>
      </div>
      <div className="mt-2 sm:mt-1 sm:text-sm">
        <p className="text-black font-serif">Lundheimsveien 23, Moi 4460</p>
        <p className="text-black font-serif">Norway</p>
        <p className="text-black font-serif mt-2 sm:mt-1">alenmedakovic@icloud.com</p>
        <p className="text-black font-serif">+47 41183195</p>
      </div>
    </div>
    <div className="px-4 py-3 w-3/4 mx-auto mt-10 bg-white rounded-md shadow-md">
      <div className="bg-gray-800 h-1/6 w-1/6 sm:w-14 sm:h-4 sm:text-base">
        <h1 className="text-white text-l text-center font-serif">Profile</h1>
      </div>
      <div className="mt-2 sm:mt-1 sm:text-sm">
        <p className="text-black font-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit ipsum
        nec nibh lacinia sagittis. Aenean condimentum odio luctus, vulputate libero ac,
        ultricies urna. Sed quis tellus cursus magna rhoncus rutrum et eu sapien. In
        hac habitasse platea dictumst. Aliquam consequat orci sed mauris semper dictum
        </p>
      </div>
    </div>
    <div className="px-4 py-3 w-3/4 mx-auto mt-10 bg-white rounded-md shadow-md">
      <div className="bg-gray-800 h-1/6 w-1/4 sm:w-20 sm:h-4 sm:text-base">
      <h1 className="text-white text-l text-center sm:mr-1 font-serif">Education</h1>
    </div>
    <div className="mt-2 sm:mt-1 sm:text-sm">
      <p className="text-black text-xl font-serif">Higschool Diploma, Flekkefjord VGS</p>
      <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block rounded-md shadow-md">
        <p className="text-black font-serif mt-1 sm:mt-0 sm:text-sm">Aug 2018 - June 2022</p>
      </div>
    </div>
  </div>
  <div className="px-4 py-3 w-3/4 mx-auto mt-10 bg-white rounded-md shadow-md">
    <div className="bg-gray-800 h-1/6 w-1/4 sm:w-20 sm:h-4 sm:text-base">
      <h1 className="text-white text-l text-center sm:mr-1 font-serif">Employment History</h1>
    </div>
    <div className="mt-2 sm:mt-1 sm:text-sm">
      <p className="text-black text-xl font-serif">Web Developer, ABC Company</p>
      <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block rounded-md shadow-md">
        <p className="text-black font-serif mt-1 sm:mt-0 sm:text-sm">June 2021 - Present</p>
      </div>
      <p className="text-black text-xl font-serif mt-4">Web Developer Intern, XYZ Company</p>
      <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block rounded-md shadow-md">
        <p className="text-black font-serif mt-1 sm:mt-0 sm:text-sm">Jan 2021 - May 2021</p>
      </div>
    </div>
  </div>
  <div className="px-4 py-3 w-3/4 mx-auto mt-10 bg-white rounded-md shadow-md">
    <div className="bg-gray-800 h-1/6 w-1/4 sm:w-20 sm:h-4 sm:text-base">
      <h1 className="text-white text-l text-center sm:mr-1 font-serif">Skills</h1>
    </div>
    <div className="mt-2 sm:mt-1 sm:text-sm">
      <p className="text-black font-serif">HTML</p>
      <div className="h-8 mt-1 w-4/5 sm:h-4 bg-white inline-block rounded-md shadow g-white inline-block rounded-md shadow-md">
        <div className="h-full w-full bg-gray-300 rounded-md"></div>
      </div>
    </div>
  </div>
</div>
  );
}

export default TemplateTwo;
