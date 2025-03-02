import axios from 'axios'
import React, { useState } from 'react'


const Predict = () => {
    const [name, setname] = useState("")
    const [predictedAge, setPredictedAge] = useState(null)

    const fetchdata = ()=> {
        axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
            setPredictedAge(res.data);
            
        })
    }

return (
    <div>
      <div className='gap-5 pt-10 text-center justify-center pb-5'>
        <h1 className='text-3xl font-bold pb-5'>PREDICT YOUR AGE</h1>
        <div className='flex text-center justify-center space-x-5 '>
            <input className='w-48 rounded border h-10 pl-5'  type="text" placeholder='Enter your name' onChange={(event)=> {setname(event.target.value)}} />
            <button className='w-32 h-10 bg-blue-400 rounded-full mb-5' onClick={fetchdata}>Predict Age</button>
        </div>
        <h1>Name: {predictedAge?.name}</h1>
        <h1>Predicted age: {predictedAge?.age}</h1>
        <h1>count: {predictedAge?.count}</h1>
    </div>
    </div>
  )
}

export default Predict
