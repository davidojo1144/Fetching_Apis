import axios from 'axios';
import React, { useState } from 'react';

const Excuse = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuses = async (excuse) => {
    try {
        const res = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
        setGeneratedExcuse(res.data[0].excuse)
        
    } catch (error) {
        console.log("Error fetching excuses: " +  error);
        
    }
    
  };

  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-center text-3xl font-bold pb-5'>GENERATE EXCUSES</h1>
        <div className='text-center justify-center space-x-5'>
          <button
            className='border bg-green-400 w-32 h-10 rounded-full'
            onClick={() => fetchExcuses("party")}
          >
            Party Excuse
          </button>
          <button
            className='border bg-blue-400 w-32 h-10 rounded-full'
            onClick={() => fetchExcuses("family")}
          >
            Family Excuse
          </button>
          <button
            className='border bg-orange-400 w-32 h-10 rounded-full'
            onClick={() => fetchExcuses("office")}
          >
            Office Excuse
          </button>
        </div>
        <p className='text-center mt-5'>{generatedExcuse}</p>
      </div>
    </div>
  );
};

export default Excuse;