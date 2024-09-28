import React, { useState, useRef, useEffect } from 'react'

import Preview from './Preview'
import Configuration from './Configuration'
import UiverseElements from './components/UiverseElements'
import Footer from './components/Footer'
const App = () => {
  const [activeLightSource, setActiveLightSource] = useState(1)
  const previewBox = useRef()

  const [githubStars, setGithubStars] = useState(0)
  console.log(githubStars)
  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/search/repositories?q=repo:adamgiebl/neumorphism',
          {
            headers: {
              Accept: 'application/vnd.github.preview'
            }
          }
        )
        const data = await response.json()
        setGithubStars(data.items[0].stargazers_count)
      } catch (error) {
        console.error('Error fetching GitHub stars:', error)
      }
    }

    fetchGithubStars()
  }, [])

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
        <div className="container max-w-screen-xl px-6 mx-auto mt-24">
          <UiverseElements />
        </div>
        <div className="container max-w-screen-lg px-6 mx-auto mt-24">
          <section className="mb-24 text-left">
            <h2 className="mb-4 text-3xl font-bold">What is Neumorphism?</h2>
            <p className="text-lg leading-relaxed opacity-80">
              Neumorphism, also known as soft UI, is a visual design trend that combines elements of
              skeuomorphism and flat design. It creates a soft, extruded plastic look by using
              subtle contrasting shadows to create the illusion of depth. This style mimics physical
              objects while maintaining a minimal and modern aesthetic, often featuring
              monochromatic color schemes with low contrast shadows and highlights.
            </p>
          </section>
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

const GitHubStarButton = ({ githubStars }) => {
  return (
    <button className="fixed z-50 items-center justify-center hidden h-10 px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out bg-gray-900 rounded-md md:inline-flex top-6 right-6 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group hover:bg-gray-950 hover:ring-2 hover:ring-offset-2 hover:ring-gray-900">
      <svg
        className="w-5 h-6 mr-2 text-white"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
      <span className="text-white">Star on GitHub</span>
      <span className="flex items-center ml-4 transition-colors duration-200 ease-in-out group-hover:text-yellow-500">
        <svg
          className="w-5 h-5 text-yellow-500"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        {githubStars && <span className="ml-2 text-white">{githubStars}</span>}
      </span>
    </button>
  )
}

export default App
