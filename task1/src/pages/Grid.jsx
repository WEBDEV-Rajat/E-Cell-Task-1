import React, { useState } from 'react';
import img1 from '../assets/logo.png';
import Navbar from '../components/Navbar';

const Grid = () => {
  const [gradient, setGradient] = useState(false);
  const [logo, setLogo] = useState(false);
  const [color, setColor] = useState([
    '#00407A', '#00407A', '#00407A', '#00407A',
    '#00407A', '#00407A', '#00407A', '#00407A', '#7A0000',
  ]);
  const [clickOrder, setClickOrder] = useState([]);
  const [colorGrid, setColorGrid] = useState(false);

  const handleSquareClick = (index) => {
    const newColors = [...color];
    newColors[index] = '#7A0000';
    setColor(newColors);
    setClickOrder([...clickOrder, index]);

    if (index === 8) {
      setTimeout(() => {
        const resetColors = [...color];
        clickOrder.forEach((i, idx) => {
          setTimeout(() => {
            if(i === 8) {
              resetColors[i] = '#7A0000';
            }
            resetColors[i] = '#00407A';
            setColor([...resetColors]);
          }, idx * 100);
        });
        setClickOrder([]);
      }, 500);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="m-4 md:m-16 mt-12 items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {gradient ? (
            <div className="bg-gradient-to-br from-[#3300FF] to-[#FA00FF] h-[385px] rounded-xl border border-[#D9D9D9] flex justify-center items-center lg:col-span-1 md:col-span-2 order-3 sm:order-none md:order-1"></div>
          ) : (
            <div className="h-[385px] flex justify-center rounded-xl items-center border w-full bg-black order-3 sm:order-none md:order-1 lg:col-span-1 md:col-span-2">
              <div
                className="bg-blue-500 p-4 pr-8 pl-8 rounded-full cursor-pointer animate-bounce"
                onClick={() => setGradient(true)}
              >
                <h1 className="text-white font-bold">Gradient</h1>
              </div>
            </div>
          )}

          
          {logo ? (
            <div className="h-[385px] rounded-xl border border-[#D9D9D9] flex justify-center items-center order-2 sm:order-none md:order-2 lg:col-span-1">
              <img src={img1} alt="logo" />
            </div>
          ) : (
            <div className="h-[385px] flex justify-center rounded-xl items-center border w-full bg-black order-2 sm:order-none md:order-2 lg:col-span-1">
              <div
                className="bg-blue-500 p-4 pr-8 pl-8 rounded-full cursor-pointer animate-bounce"
                onClick={() => setLogo(true)}
              >
                <h1 className="text-white font-bold">Logo</h1>
              </div>
            </div>
          )}

          
          {colorGrid ? (
            <div className="h-[385px] rounded-xl bg-[#D9D9D9] border border-[#D9D9D9] flex justify-center items-center order-1 sm:order-none md:order-3 lg:col-span-1">
              <div className="h-[300px] border w-3/4 rounded-lg grid grid-cols-3 gap-2">
                {color.map((c, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: c }}
                    className="cursor-pointer rounded-lg"
                    onClick={() => handleSquareClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-[385px] flex justify-center rounded-xl items-center border w-full bg-black order-1 sm:order-none md:order-3 lg:col-span-1">
              <div
                className="bg-blue-500 p-4 pr-8 pl-8 rounded-full cursor-pointer animate-bounce"
                onClick={() => setColorGrid(true)}
              >
                <h1 className="text-white font-bold">Color Grid</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grid;
