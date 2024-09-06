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
        <UiverseElements />
      </div>
    </div>
  )
}

export default App
