import React, { useState, useEffect, useCallback } from 'react'
import { ElementCard } from './ElementCard'

const UiverseElements = () => {
  const [elements, setElements] = useState([])

  const fetchUiverseElements = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/resource/neumorphism-elements')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
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
      <div className="space-y-1 text-start">
        <h3 className="text-3xl font-black text-primary">Examples</h3>
        <p className="text-base text-primary">Examples of Neumorphism elements</p>
      </div>
      <div className="grid grid-cols-card mt-6 gap-y-5 gap-x-3.5 w-full mb-24 max-xs:grid-cols-1 max-xs:gap-2.5">
        {elements.map(element => (
          <ElementCard key={element.id} {...element} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <a
          href="https://uiverse.io/elements?tags=neumorphism"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
        >
          Browse more
        </a>
      </div>
    </>
  )
}

export default UiverseElements
