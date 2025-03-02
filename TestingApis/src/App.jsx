import React from 'react'
import CatData from './components/CatData'
import Predict from './components/Predict'

const App = () => {
  return (
    <div className='container space-y-20 mt-10 bg-gray-300 rounded-2xl p-5 items-center justify-center' >
      <CatData/>
      <Predict/>
    </div>
  )
}

export default App
