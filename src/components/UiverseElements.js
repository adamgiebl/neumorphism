import React, { useState, useEffect, useCallback } from 'react'
import { ElementCard } from './ElementCard'

const UiverseElements = () => {
  const [elements, setElements] = useState([])

  const fetchUiverseElements = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/resource/neumorphism-elements')
      if (!response.ok) {
        setElements([])
        return
      }
      const data = await response.json()

      setElements(data?.posts || [])
    } catch (e) {
      console.error('Error fetching Uiverse elements:', e)
      setElements([])
    }
  }, [])

  useEffect(() => {
    fetchUiverseElements()
  }, [fetchUiverseElements])

  if (elements.length === 0) return null

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1 text-start">
          <h2 className="text-3xl font-black">Examples</h2>
          <p className="text-base opacity-60">Examples of Neumorphism elements</p>
        </div>
        <a
          href="https://uiverse.io/elements?tags=neumorphism"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border whitespace-nowrap rounded-md flex items-center gap-2 font-semibold border-[color:var(--textColor)] text-[color:var(--textColor)] hover:bg-[color:var(--textColor)] hover:text-[color:var(--baseColor)]"
        >
          Browse all{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>
      <div className="grid sm:grid-cols-card mt-6 gap-y-5 gap-x-3.5 w-full mb-24 max-xs:grid-cols-1 max-xs:gap-2.5">
        {elements.map(element => (
          <ElementCard key={element.id} {...element} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full browse-more">
        <a
          href="https://uiverse.io/elements?tags=neumorphism"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border font-semibold rounded-md flex items-center gap-2 border-[color:var(--textColor)] text-[color:var(--textColor)] hover:bg-[color:var(--textColor)] hover:text-[color:var(--baseColor)]"
        >
          Browse all{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>
    </>
  )
}

export default UiverseElements
