import { useState, useEffect } from 'react'

const useGithubStars = repo => {
  const [githubStars, setGithubStars] = useState(0)

  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/search/repositories?q=repo:${repo}`, {
          headers: {
            Accept: 'application/vnd.github.preview'
          }
        })
        const data = await response.json()
        if (data.items && data.items.length > 0) {
          setGithubStars(data.items[0].stargazers_count)
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error)
      }
    }

    fetchGithubStars()
  })

  return githubStars
}

export default useGithubStars
