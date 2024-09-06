import React, { useState, useRef } from 'react'

import Preview from './Preview'
import Configuration from './Configuration'
import UiverseElements from './components/UiverseElements'

const App = () => {
  const [activeLightSource, setActiveLightSource] = useState(1)
  const previewBox = useRef()

  return (
    <div className="container App">
      <div className="flex-custom">
        <Preview setActiveLightSource={setActiveLightSource} previewBox={previewBox} />
        <Configuration previewBox={previewBox} activeLightSource={activeLightSource} />
      </div>
      <div className="mt-24">
        <div className="text-start space-y-1">
          <h3 className="text-primary text-3xl font-black">Examples</h3>
          <p className="text-primary text-base">Examples of Neumorphism elements</p>
        </div>
        <div className="mt-6">
          <UiverseElements />
        </div>
      </div>
    </div>
  )
}

export default App
