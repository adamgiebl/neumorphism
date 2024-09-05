import React, { useState, useRef } from 'react'

import Preview from './Preview'
import Configuration from './Configuration'
import UiverseElements from './UiverseElements'

const App = () => {
  const [activeLightSource, setActiveLightSource] = useState(1)
  const previewBox = useRef()

  return (
    <div className="container App">
      <div className="flex">
        <Preview setActiveLightSource={setActiveLightSource} previewBox={previewBox} />
        <Configuration previewBox={previewBox} activeLightSource={activeLightSource} />
      </div>
      <div className='mt-10'>
        <UiverseElements />
      </div>
    </div>
  )
}

export default App
