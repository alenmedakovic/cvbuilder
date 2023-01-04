import React from 'react'

function PaperInput() {
    return (
        <div className="relative h-screen w-1/2">
        <div className="h-10" />
        <div className="absolute top-0 left-0 w-full text-center text-2xl font-bold text-gray-800 mt-16">
          Build your perfect CV!
          </div>
        <div className="relative h-5/6 w-4/6 bg-white shadow-lg rounded-md mx-auto my-20 shadow-t-xl"
        style={{boxShadow: "0 0px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}}>
        <div className="absolute top-0 left-0 h-full bg-white shadow-xl z-0">
          </div>
        </div>
      </div>
      );
};

export default PaperInput;
