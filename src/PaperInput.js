import React, { useRef } from 'react';

function PaperInput() {
  const dropRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  }

    const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    dropRef.current.innerHTML = `
      <div class="flex items-center justify-between p-2 bg-gray-200 rounded-md">
        <span>${data}</span>
      </div>
      `;
  } 

  return (
      <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="text-center font-bold text-xl mb-4">Text above box</div>
        <div className="border-t-2 h-5/6 w-4/6 shadow-xl" ref={dropRef} onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="h-full w-full bg-white rounded-md p-4 shadow-lg">
        </div>
        </div>
      </div>
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div className="bg-gray-300 h-12 w-12 p-4 text-center" draggable onDragStart={(event) =>
          event.dataTransfer.setData("text", "Draggable Element")}> Drag me!
        </div>
      </div>
    </div>
  );
}

export default PaperInput;
