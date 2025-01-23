import React, { useState, useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import img1 from '../assets/Profile.jpeg';
import audioFile from '../assets/Squid game.mp3'; 
import { RxSpeakerLoud } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 9);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const audio = new Audio(audioFile); 
    audio.loop = true; 
    audio.play(); 

    return () => {
      audio.pause(); 
      audio.currentTime = 0; 
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-2 w-full h-screen flex flex-col items-center">
        <p className='text-blue-500 text-xl mt-5 flex'>
          <RxSpeakerLoud className="mr-2 mt-1" />
          Listen to the audio and click on the link!
        </p>
        <div className="mt-20 max-h-[100px] max-w-[100px] rounded-full z-10">
          <img
            src={img1}
            alt="Profile"
            className="h-[100px] w-[100px] border border-black rounded-full"
          />
        </div>
        <div className="max-h-[300px] max-w-[600px] border rounded-lg -m-8 p-5 bg-gradient-to-br from-red-500 to-yellow-400 z-0 flex justify-center items-center">
          <div className="mt-5 bg-white max-h-[200px] max-w-[400px] p-5 flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <h1>Name: Rajat Bagaddeo</h1>
              <h1>Reg. No: 20235063</h1>
              <h1 className="bg-blue-500 hover:bg-blue-700 p-2 text-white font-semibold rounded-md">
                {count < 5 ? (
                  <a
                    href="https://www.instagram.com/rajat_rocks4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow me on Instagram
                  </a>
                ) : (
                  <Link to="/fail">Follow me on Instagram</Link>
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
