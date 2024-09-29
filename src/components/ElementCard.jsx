import { ShadowDOMContent } from './ShadowDOMContent'

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

export const code = className => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16" />
  </svg>
)

const ElementCard = props => {
  const {
    html,
    css,
    viewCount,
    theme,
    friendlyId,
    type,
    backgroundColor,
    user,
    className = ''
  } = props

  const link = `https://uiverse.io/${user.username}/${friendlyId}`

  const handleShadowClick = e => {
    e.stopImmediatePropagation()
  }

  const handleClick = () => {
    window.open(link, { target: '_blank' })
  }

  return (
    <div
      onClick={handleClick}
      className={`card flex flex-col w-full h-full card--${type} group ${
        theme === 'dark' && 'dark-background'
      }`}
    >
      <div className={`card-content grow w-full ${className}`}>
        <div className="w-full text-black clickable-wrapper">
          <ShadowDOMContent
            css={css}
            html={html}
            backgroundColor={backgroundColor}
            onClickShadow={handleShadowClick}
          />
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold get-code bg-[var(--baseColor)] opacity-80 text-[var(--textColor)]"
      >
        {code('w-[20px] h-[20px]')} Get code
      </a>

      <div className="flex items-center justify-between gap-1 mt-1 card__views">
        <p className="text-base font-semibold">{user?.username}</p>
        {viewCount > 0 && (
          <span className="text-sm font-normal opacity-60">
            {formatter.format(viewCount)} views
          </span>
        )}
      </div>
    </div>
  )
}

export default ElementCard
