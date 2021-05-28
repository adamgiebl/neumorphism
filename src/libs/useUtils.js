export function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

export function getContrast(hex) {
  const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#001f3f' : '#F6F5F7'
}

export const isValidColor = hex => /^#[0-9A-F]{6}$/i.test(hex)

export const getColorFromRoute = () => {
  if (window.location.hash) {
    if (/^#[0-9A-F]{6}$/i.test(window.location.hash)) {
      return window.location.hash
    }
  }
}

export const getSizes = () => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  if ((windowWidth < 1000 || windowHeight < 860) && window.navigator.userAgent !== 'ReactSnap') {
    if (windowWidth < 800) {
      if (windowWidth < 680) {
        return { maxSize: 180, size: 150 }
      } else {
        return { maxSize: 250, size: 200 }
      }
    } else {
      return { maxSize: 350, size: 250 }
    }
  } else {
    return { maxSize: 410, size: 300 }
  }
}

export const camelize = str => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}
