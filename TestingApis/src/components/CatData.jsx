import axios from 'axios'
import React, { useEffect, useState } from 'react'


const CatData = () => {
 
    const [catData, setCatData] = useState("")

    const fetchCatData = ()=>{
      axios.get("https://catfact.ninja/fact").then((response)=> {
        setCatData(response.data.fact);
        
      })
    }
  
    useEffect(()=> {
      fetchCatData()
    },[])
  
  
    return (
      <div>
        <div className='container'>
          <div className='text-center justify-center pt-10'>
            <h1 className='text-3xl font-bold pb-5'>All CAT FACTS</h1>
            <button onClick={fetchCatData} className='w-32 h-10 bg-green-400 rounded-full mb-5' >View Cats Facts</button>
            <p>{catData}</p>
          </div>
        </div>
      </div>
    )
  }

export default CatData
