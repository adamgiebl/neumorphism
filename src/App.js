import React, { useState, useRef } from 'react'

import Preview from './Preview'
import Configuration from './Configuration'

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
