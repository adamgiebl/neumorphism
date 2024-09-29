const GitHubStarButton = ({ githubStars }) => {
  return (
    <a
      href="https://github.com/adamgiebl/neumorphism"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Star adamgiebl/neumorphism on GitHub"
      className="z-50 fixed items-center justify-center hidden h-10 px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out bg-gray-900 rounded-md md:inline-flex top-6 right-6 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group hover:bg-gray-950 hover:ring-2 hover:ring-offset-2 hover:ring-gray-900"
    >
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
      <span className="flex items-center transition-colors duration-200 ease-in-out group-hover:text-yellow-500">
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
    </a>
  )
}

export default GitHubStarButton
