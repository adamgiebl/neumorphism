import React, { useState, useRef } from 'react'

import Preview from './components/Preview'
import Configuration from './components/Configuration'

const App = () => {
  const [activeLightSource, setActiveLightSource] = useState(1)
  const previewBox = useRef()

  return (
    <div className="container App">
      <div className="flex">
        <Preview setActiveLightSource={setActiveLightSource} previewBox={previewBox} />
        <Configuration previewBox={previewBox} activeLightSource={activeLightSource} />
      </div>
    </div>
  )
}

export default App
