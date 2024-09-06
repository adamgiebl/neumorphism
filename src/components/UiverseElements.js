import React, { useState, useEffect, useCallback } from 'react'
import { ElementCard } from './ElementCard'

const UiverseElements = () => {
  const [elements, setElements] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUiverseElements = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch('http://localhost:3000/resource/neumorphism-elements')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)

      setElements(data.posts)
    } catch (e) {
      setError(`Failed to fetch Uiverse elements: ${e.message}`)
      console.error('Error fetching Uiverse elements:', e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUiverseElements()
  }, [fetchUiverseElements])

  const renderElements = () => {
    console.log(elements)

    if (!elements) return <p>No data available.</p>

    if (Array.isArray(elements)) {
      return elements.length === 0 ? (
        <p>No elements found.</p>
      ) : (
        <>
          <div className="grid grid-cols-card gap-y-5 gap-x-3.5 w-full mb-24 max-xs:grid-cols-1 max-xs:gap-2.5">
            {elements.map(element => (
              <ElementCard key={element.id} {...element} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full">
            <a
              href="https://uiverse.io/elements?tags=neumorphism"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-primary border rounded-md text-primary hover:bg-primary hover:text-white"
            >
              Browse more
            </a>
          </div>
        </>
      )
    }

    return
  }

  if (isLoading) {
    return <div>Loading Uiverse elements...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div>{renderElements()}</div>
}

export default UiverseElements
