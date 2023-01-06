import React, { useRef } from 'react';
import undoIcon from "./photos/undoicon.png"
import TemplateOne from './TemplateOne';

function PaperInput() {
  const dropRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  }

    const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    dropRef.current.innerHTML = `
      <div class="flex items-center justify-between p-2 bg-white rounded-md">
        <span>${data}</span>
      </div>
      `;
  } 

  const handleUndoDrop = () => {
    dropRef.current.innerHTML = ``;
  }

  return (
      <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="bg-white w-12 h-12 ml-auto mr-4 relative top-24">
          <button className="undoButton cursor-pointer block w-full h-full" onClick={handleUndoDrop}>
          <img src={undoIcon} alt="Undo Icon"></img>
          </button>
        </div>
        <div className="text-center font-bold text-xl mb-4">Build your CV</div>
        <div className="border-t-2 h-5/6 w-4/6 shadow-xl mb-4" ref={dropRef} onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="h-full w-full bg-white rounded-md p-4 shadow-lg">
        </div>
        </div>
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
      <div className="bg-white h-16 w-60 absolute top-20">
        <p className="mt-14 text-center font-bold text-xl">Templates</p>
      </div>
      <div className="snap-x snap-mandatory overflow-scroll overflow-y-hidden bg-white shadow-md h-60 flex w-2/5 absolute top-40 right-16">
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"></div>
      </div>
        <div className="bg-white h-12 w-12 p-4 text-center" draggable onDragStart={(event) =>
          event.dataTransfer.setData("text", "Draggable Element")}> Drag me!
        </div>
      </div>
    </div>
  );
}

export default PaperInput;
