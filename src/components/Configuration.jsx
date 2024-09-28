import React, { useEffect, useState, useRef } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import ShapeSwitcher from './ShapeSwitcher'
import { isValidColor, colorLuminance, getContrast, getColorFromRoute, getSizes } from '../utils'
import { prism as Light, atomDark as Dark } from 'react-syntax-highlighter/dist/esm/styles/prism/'
import ConfigurationRow from './ConfigurationRow'

SyntaxHighlighter.registerLanguage('css', css)

const Configuration = ({ previewBox, activeLightSource = 1 }) => {
  const [blur, setBlur] = useState(60)
  const defaultColor = '#e0e0e0'
  const [color, setColor] = useState(getColorFromRoute() || defaultColor)
  const [size, setSize] = useState(300)
  const [radius, setRadius] = useState(50)
  const [shape, setShape] = useState(0)
  const [distance, setDistance] = useState(20)
  const [colorDifference, setColorDifference] = useState(0.15)
  const [maxSize, setMaxSize] = useState(410)
  const [maxRadius, setMaxRadius] = useState(150)
  const [gradient, setGradient] = useState(false)
  const [codeString, setCodeString] = useState('')
  const codeContainer = useRef()
  const code = useRef()
  const colorInput = useRef()
  const theme = useRef(false)

  const colorOnChange = ({ target: { value } }) => {
    if (isValidColor(value)) {
      setColor(value)
    }
  }

  const handleColor = e => {
    window.history.replaceState('homepage', 'Title', '/' + e.target.value)
    setColor(e.target.value)
  }

  const copyToClipboard = e => {
    const el = codeContainer.current
    el.select()
    el.setSelectionRange(0, 99999)
    document.execCommand('copy')
    code.current.classList.add('copied')

    setTimeout(() => {
      code.current.classList.remove('copied')
    }, 1000)
  }

  const handleDistance = ({ target: { value } }) => {
    setDistance(value)
    setBlur(value * 2)
  }

  const handleSize = ({ target: { value } }) => {
    setSize(value)
    setDistance(Math.round(value * 0.1))
    setBlur(Math.round(value * 0.2))
    setMaxRadius(Math.round(value / 2))
  }

  const handleShape = ({
    target: {
      dataset: { shape }
    }
  }) => {
    const shapeId = parseInt(shape)
    setShape(shapeId)
    if (shapeId === 2 || shapeId === 3) {
      setGradient(true)
    } else {
      setGradient(false)
    }
  }

  useEffect(() => {
    window.history.replaceState('homepage', 'Title', '/' + color)
    const { maxSize, size } = getSizes()
    setMaxSize(maxSize)
    setSize(size)
  }, [])

  useEffect(() => {
    if (!isValidColor(color)) {
      return
    }
    const darkColor = colorLuminance(color, colorDifference * -1)
    const lightColor = colorLuminance(color, colorDifference)

    const firstGradientColor =
      gradient && shape !== 1 ? colorLuminance(color, shape === 3 ? 0.07 : -0.1) : color
    const secondGradientColor =
      gradient && shape !== 1 ? colorLuminance(color, shape === 2 ? 0.07 : -0.1) : color

    const lightSourceMap = new Map([
      [1, { positionX: distance, positionY: distance, angle: 145 }],
      [2, { positionX: -distance, positionY: distance, angle: 225 }],
      [3, { positionX: -distance, positionY: -distance, angle: 315 }],
      [4, { positionX: distance, positionY: -distance, angle: 45 }],
      ['default', { positionX: distance, positionY: distance, angle: 145 }]
    ])

    // Accessing the values based on activeLightSource
    const { positionX, positionY, angle } =
      lightSourceMap.get(activeLightSource) || lightSourceMap.get('default')

    colorInput.current.value = color

    document.documentElement.style.cssText = `
      --positionX: ${positionX}px;
      --positionXOpposite: ${positionX * -1}px;
      --positionY: ${positionY}px;
      --positionYOpposite: ${positionY * -1}px;
      --angle: ${angle}deg;
      --blur: ${blur}px;
      --textColor: ${getContrast(color)};
      --textColorOpposite: ${color};
      --baseColor: ${color};
      --darkColor: ${darkColor};
      --lightColor: ${lightColor};
      --firstGradientColor: ${firstGradientColor};
      --secondGradientColor: ${secondGradientColor};
      --size: ${size}px;
      --radius: ${radius}px;
    `
    if (shape === 1) {
      previewBox.current.classList.add('pressed')
    } else {
      previewBox.current.classList.remove('pressed')
    }

    if (isValidColor(color)) {
      if (getContrast(color) === '#001f3f') {
        theme.current = true
      } else {
        theme.current = false
      }
    }

    const borderRadius = parseInt(radius) === maxRadius ? '50%' : radius + 'px'
    const background =
      gradient && shape !== 1
        ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})`
        : `${color}`
    const boxShadowPosition = shape === 1 ? 'inset' : ''
    const firstBoxShadow = `${boxShadowPosition} ${positionX}px ${positionY}px ${blur}px ${darkColor}`
    const secondBoxShadow = `${boxShadowPosition} ${positionX * -1}px ${
      positionY * -1
    }px ${blur}px ${lightColor};`

    setCodeString(
      `border-radius: ${borderRadius};
background: ${background};
box-shadow: ${firstBoxShadow},
            ${secondBoxShadow}`
    )
  })
  return (
    <div className="configuration soft-shadow">
      <div className="row">
        <label htmlFor="color" className="opacity-60">
          Pick a color
        </label>
        <input
          type="color"
          name="color"
          onChange={handleColor}
          placeholder="#ffffff"
          value={color}
          id="color"
        />
        <label htmlFor="colorInput" style={{ paddingLeft: '10px' }} className="opacity-60">
          or
        </label>
        <input
          type="text"
          placeholder="#ffffff"
          name="color"
          id="colorInput"
          ref={colorInput}
          onChange={colorOnChange}
        />
        {color !== defaultColor && (
          <button
            onClick={() => {
              setColor(defaultColor)
            }}
            className="h-[32px] flex items-center gap-1.5 px-2 py-1 ml-3 text-xs text-[var(--textColor)] border-[3px] bg-[var(--baseColor)] border-[var(--textColor)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4">
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
            Reset
          </button>
        )}
      </div>
      <ConfigurationRow
        label={'Size'}
        type={'range'}
        value={size}
        onChange={handleSize}
        min={'10'}
        max={maxSize}
      />
      <ConfigurationRow
        label={'Radius'}
        type={'range'}
        value={radius}
        onChange={e => setRadius(e.target.value)}
        min={'0'}
        max={maxRadius}
      />
      <ConfigurationRow
        label={'Distance'}
        type={'range'}
        value={distance}
        onChange={handleDistance}
        min={'5'}
        max={'50'}
      />
      <ConfigurationRow
        label={'Intensity'}
        type={'range'}
        value={colorDifference}
        onChange={e => setColorDifference(e.target.value)}
        min={'0.01'}
        max={'0.6'}
        step={'0.01'}
      />
      <ConfigurationRow
        label={'Blur'}
        type={'range'}
        value={blur}
        onChange={e => setBlur(e.target.value)}
        min={'0'}
        max={'100'}
      />
      <ShapeSwitcher shape={shape} setShape={handleShape} />
      <div className={`code-block ${theme.current ? '' : 'small'}`} ref={code}>
        <button
          className="flex items-center gap-1.5 text-white copy text-xs"
          onClick={copyToClipboard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-3 h-3 text-white"
          >
            <path
              fill="currentColor"
              d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
            />
          </svg>
          Copy
        </button>
        <SyntaxHighlighter language="css" style={theme.current ? Dark : Light}>
          {codeString}
        </SyntaxHighlighter>
        <label htmlFor="code-container" className="hidden">
          hidden
        </label>
        <textarea id="code-container" ref={codeContainer} value={codeString} readOnly></textarea>
      </div>
    </div>
  )
}

export default Configuration
