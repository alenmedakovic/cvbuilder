import React, { useRef, useState, ReactDOM } from 'react';
import undoIcon from "./photos/undoicon.png";
import pdfIcon from "./photos/pdfIcon.png"
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function PaperInput() {
  const [ component, setComponent ] = useState();
  const dropRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  }
   

    const handleDrop = (event) => {
    event.preventDefault();
    const component = event.dragData;
    setComponent(component)
    ReactDOM.render(component, dropRef.current);
   /* dropRef.current.innerHTML = `<div class="flex items-center justify-between p-2 bg-white rounded-md">
    <span>${component}</span>
  </div>
  `; */
  }  

  const handleUndoDrop = () => {
    dropRef.current.innerHTML = ``;
  }

  const generatePDF = () => {
    const element = document.getElementById("template-one");

    const pdf = new jsPDF();

    html2canvas(element).then(canvas => {
      const dataURI = canvas.toDataURL();
      pdf.addImage(dataURI, `png`, 0, 0);
      pdf.save("CV.pdf");
    });
  }

  return (
      <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="bg-white w-12 h-12 ml-auto mr-4 relative top-24">
          <button className="undoButton bg-white cursor-pointer block w-full h-full" onClick={handleUndoDrop}>
          <img src={undoIcon} alt="Undo Icon"></img>
          </button>
          <button onClick={generatePDF} className="w-12 h-12 bg-white absolute top-80 mt-52 right-2">
            <p className="sm:text-sm mb-1 text-red-300">Generate PDF</p>
          <img src={pdfIcon} />
          </button>
        </div>
        <div className="text-center font-bold text-xl mb-4">Build your CV</div>
        <div className="border-t-2 w-4/6 h-5/6 shadow-xl mb-4 overflow-hidden" ref={dropRef} onDragOver={handleDragOver}
        onDrop={handleDrop}><TemplateOne />
        <div className="w-full bg-white rounded-md p-4 shadow-lg">
        </div>
        </div>
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
      <div className="bg-white h-16 w-60 absolute top-20">
        <p className="mt-14 text-center font-bold text-xl">Templates</p>
      </div>
      <div className="snap-x snap-mandatory overflow-scroll overflow-y-hidden bg-white shadow-md h-60 flex w-2/5 absolute top-40 right-16">
        <div className="flex-shrink-0 bg-white h-48 w-28 ml-6 mt-4 shadow-xl border-t-2"
         draggable onDragStart={(event) => {
          event.dragData = <TemplateTwo />;
         }}><TemplateTwo /></div>
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
