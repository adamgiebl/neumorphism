import React, { useEffect, useRef } from 'react'
import { LightSource } from './App.style'

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
  return (
    <div className="preview">
      <LightSource
        top="0"
        bottom="unset"
        right="0"
        left="unset"
        data-value="2"
        onClick={setLightSource}
        className="light-source"
      ></LightSource>
      <LightSource
        top="0"
        bottom="unset"
        right="unset"
        left="0"
        data-value="1"
        onClick={setLightSource}
        className="light-source active"
      ></LightSource>
      <LightSource
        top="unset"
        bottom="0"
        right="0"
        left="unset"
        data-value="3"
        onClick={setLightSource}
        className="light-source"
      ></LightSource>
      <LightSource
        top="unset"
        bottom="0"
        right="unset"
        left="0"
        data-value="4"
        onClick={setLightSource}
        className="light-source"
      ></LightSource>
      <div ref={previewBox} className="soft-element soft-shadow"></div>
    </div>
  )
}

export default Preview
