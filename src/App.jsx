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
        <div className="container max-w-screen-lg px-6 mx-auto mt-24">
          <section className="mb-24 text-left">
            <h2 className="relative z-10 mb-2 text-4xl font-bold">More Tools</h2>
            <p className="pl-0.5 mb-8 text-lg leading-relaxed opacity-80">
              Free frontend resources to help you build your next project.
            </p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <ProjectCard
                title="Uiverse.io"
                description="The largest library of Open-Source UI elements. Explore a vast collection of beautiful UI elements, including buttons, checkboxes, cards, and more."
                link="https://uiverse.io"
                image="https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/c802e23e-4d13-44ef-a2fe-46c467571900/public"
              />
              <ProjectCard
                title="Cssbuttons.io"
                description="Collection of 100+ beautiful, customizable buttons for your next project. Get the code you need to enhance your web projects with stylish, functional buttons."
                link="https://cssbuttons.io"
                image="https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/cb814b9d-45f8-46f5-3108-91e511990200/public"
              />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col p-6 soft-shadow rounded-3xl">
      <div className="">
        <img src={image} alt={title} className="object-cover rounded-xl" />
      </div>
      <div className="flex flex-col items-start flex-1 mt-6 text-left">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-2 text-2xl font-bold hover:underline"
        >
          {title}
        </a>
        <p className="flex-1 text-base leading-relaxed opacity-80">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[color:var(--textColor)] text-[color:var(--baseColor)] font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          Visit {title.replace('.io', '')}{' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
