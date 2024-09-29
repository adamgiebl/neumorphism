import React, { useEffect, useRef } from 'react'
import LightSource from './LightSource'

const Preview = ({ previewBox, setActiveLightSource }) => {
  const lightSources = useRef([])
  useEffect(() => {
    lightSources.current = [...document.querySelectorAll('.light-source')]
  }, [])
  const setLightSource = e => {
    lightSources.current.forEach(element => {
      element.classList.remove('active')
    })
    e.target.classList.add('active')
    setActiveLightSource(parseInt(e.target.dataset.value))
  }

  const lightSourcesMap = [
    {
      top: '0',
      bottom: 'unset',
      right: '0',
      left: 'unset',
      dataValue: '2'
    },
    {
      top: '0',
      bottom: 'unset',
      right: 'unset',
      left: '0',
      dataValue: '1'
    },
    {
      top: 'unset',
      bottom: '0',
      right: '0',
      left: 'unset',
      dataValue: '3'
    },
    {
      top: 'unset',
      bottom: '0',
      right: 'unset',
      left: '0',
      dataValue: '4'
    }
  ]

  return (
    <div className="preview">
      {lightSourcesMap.map((lightSource, index) => (
        <LightSource
          key={index}
          top={lightSource.top}
          bottom={lightSource.bottom}
          right={lightSource.right}
          left={lightSource.left}
          data-value={lightSource.dataValue}
          onClick={setLightSource}
          className={`${lightSource.dataValue === '1' ? 'light-source active' : 'light-source'}`}
        />
      ))}
      <div ref={previewBox} className="soft-element soft-shadow"></div>
    </div>
  )
}

export default Preview
