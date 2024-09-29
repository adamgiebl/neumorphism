import React, { useState, useRef } from 'react'

import GitHubStarButton from './components/GitHubStarButton'
import Preview from './components/Preview'
import Configuration from './components/Configuration'
import UiverseElements from './components/UiverseElements'
import Footer from './components/Footer'
import useGithubStars from './hooks/useGitHubStars'

const App = () => {
  const [activeLightSource, setActiveLightSource] = useState(1)
  const previewBox = useRef()

  const githubStars = useGithubStars('adamgiebl/neumorphism')

  return (
    <>
      <GitHubStarButton githubStars={githubStars} />
      <div className="w-full App">
        <div className="container mx-auto">
          <div className="mx-auto flex-custom">
            <Preview setActiveLightSource={setActiveLightSource} previewBox={previewBox} />
            <Configuration previewBox={previewBox} activeLightSource={activeLightSource} />
          </div>
        </div>
        <div className="container max-w-screen-lg px-6 mx-auto mt-24">
          <section className="mb-24 text-left">
            <h2 className="mb-4 text-3xl font-bold">What is Neumorphism?</h2>
            <p className="max-w-4xl text-base leading-relaxed">
              Neumorphism, also known as soft UI, is a visual design trend that combines elements of
              skeuomorphism and flat design. It creates a soft, extruded plastic look by using
              subtle contrasting shadows to create the illusion of depth. This style mimics physical
              objects while maintaining a minimal and modern aesthetic, often featuring
              monochromatic color schemes with low contrast shadows and highlights.
            </p>
          </section>
        </div>
        <div className="container max-w-screen-xl px-6 mx-auto mt-24">
          <UiverseElements />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
