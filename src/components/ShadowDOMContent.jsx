import { useEffect, useRef } from 'react'

export const globalReset = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button {
  font-family: inherit;
}

`

export const ShadowDOMContent = ({ css, html, backgroundColor, onClickShadow }) => {
  const previewRef = useRef(null)
  const styleObj = backgroundColor ? { backgroundColor: backgroundColor } : {}

  // https://issues.chromium.org/issues/350526047#comment3
  const regexToRemoveBgBlur = /backdrop-filter:\s*blur\(\d+px\);\s*/g

  useEffect(() => {
    if (previewRef.current && document) {
      let shadowRoot = previewRef.current.shadowRoot
      if (!shadowRoot) {
        shadowRoot = previewRef.current.attachShadow({ mode: 'open' })
      }

      const style = document.createElement('style')
      style.textContent = globalReset + css?.replace(regexToRemoveBgBlur, '')
      shadowRoot.appendChild(style)
      shadowRoot.addEventListener('click', onClickShadow)
      shadowRoot.innerHTML += html
    }

    return () => {
      if (previewRef.current && document) {
        const shadowRoot = previewRef.current?.shadowRoot
        shadowRoot.innerHTML = ''
      }
    }
  }, [html, css])

  return (
    <div
      id="container"
      ref={previewRef}
      className={`card__button-container w-full relative z-[1]`}
      style={styleObj}
      suppressHydrationWarning
    ></div>
  )
}
