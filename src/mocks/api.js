export const MOCKED_RESPONSE = {
  posts: [
    {
      id: '10236750-1cd9-4a6d-aa57-dff2a0d7cf35',
      friendlyId: 'quick-dragonfly-7',
      backgroundColor: '',
      html: '<div class="card">\n  <div class="card-overlay"></div>\n  <div class="card-inner">YOUR<br>CONTENT<br>HERE</div>\n</div>',
      css: '.card {\n  --bg: #e8e8e8;\n  --contrast: #e2e0e0;\n  --grey: #93a1a1;\n  position: relative;\n  padding: 9px;\n  background-color: var(--bg);\n  border-radius: 35px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n}\n\n.card-overlay {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%) 60% 60%/600% 600%;\n  filter: opacity(10%) contrast(105%);\n}\n\n.card-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 190px;\n  height: 254px;\n  background-color: var(--contrast);\n  border-radius: 30px;\n  /* Content style */\n  font-size: 30px;\n  font-weight: 900;\n  color: #c7c4c4;\n  text-align: center;\n  font-family: monospace;\n}',
      theme: 'light',
      type: 'card',
      viewCount: 11098,
      originalPostId: null,
      user: {
        username: 'LilaRest'
      },
      _count: {
        user_favorite_post: 100
      }
    },
    {
      id: 'ada30579-c82b-41fc-897f-4fd8c3b5fd18',
      friendlyId: 'serious-penguin-95',
      backgroundColor: '',
      html: '\n<div class="card"></div>',
      css: '.card {\n  width: 190px;\n  height: 254px;\n  border-radius: 30px;\n  background: lightgrey;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;\n}',
      theme: 'light',
      type: 'card',
      viewCount: 15281,
      originalPostId: null,
      user: {
        username: 'adamgiebl'
      },
      _count: {
        user_favorite_post: 171
      }
    },
    {
      id: '63503fb6-7fd2-4b9e-a179-d260083e8e1c',
      friendlyId: 'rude-stingray-22',
      backgroundColor: '',
      html: '<div class="toggle-wrapper">\n  <input class="toggle-checkbox" type="checkbox">\n  <div class="toggle-container">  \n    <div class="toggle-button">\n      <div class="toggle-button-circles-container">\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n        <div class="toggle-button-circle"></div>\n      </div>\n    </div>\n  </div>\n</div>',
      css: '.toggle-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: .5em;\n  padding: .125em;\n  background-image: linear-gradient(to bottom, #d5d5d5, #e8e8e8);\n  box-shadow: 0 1px 1px rgb(255 255 255 / .6);\n  /* resize for demo */\n  font-size: 1.5em;\n}\n\n.toggle-checkbox {\n  appearance: none;\n  position: absolute;\n  z-index: 1;\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  /* fix em sizing */\n  font: inherit;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.toggle-container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-radius: .375em;\n  width: 3em;\n  height: 1.5em;\n  background-color: #e8e8e8;\n  box-shadow: inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4);\n  transition: background-color .4s linear;\n}\n\n.toggle-checkbox:checked + .toggle-container {\n  background-color: #f3b519;\n}\n\n.toggle-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: .0625em;\n  border-radius: .3125em;\n  width: 1.375em;\n  height: 1.375em;\n  background-color: #e8e8e8;\n  box-shadow: inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5);\n  transition: left .4s;\n}\n\n.toggle-checkbox:checked + .toggle-container > .toggle-button {\n  left: 1.5625em;\n}\n\n.toggle-button-circles-container {\n  display: grid;\n  grid-template-columns: repeat(3, min-content);\n  gap: .125em;\n  position: absolute;\n  margin: 0 auto;\n}\n\n.toggle-button-circle {\n  border-radius: 50%;\n  width: .125em;\n  height: .125em;\n  background-image: radial-gradient(circle at 50% 0, #f5f5f5, #c4c4c4);\n}',
      theme: 'light',
      type: 'switch',
      viewCount: 8539,
      originalPostId: null,
      user: {
        username: 'njesenberger'
      },
      _count: {
        user_favorite_post: 135
      }
    },
    {
      id: '070b5eec-1dd3-4f3e-97d2-158556dedc81',
      friendlyId: 'lucky-hound-44',
      backgroundColor: '',
      html: '<div class="main">\n  <div class="up">\n    <div class="loaders">\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n      <div class="loader"></div>\n    </div>\n    <div class="loadersB">\n      <div class="loaderA">\n        <div class="ball0"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball1"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball2"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball3"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball4"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball5"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball6"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball7"></div>\n      </div>\n      <div class="loaderA">\n        <div class="ball8"></div>\n      </div>\n    </div>\n  </div>\n</div>\n',
      css: '.main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loaders,\n.loadersB {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader {\n  position: absolute;\n  width: 1.15em;\n  height: 13em;\n  border-radius: 50px;\n  background: #e0e0e0;\n}\n.loader:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.15em;\n  height: 5em;\n  background: #e0e0e0;\n  border-radius: 50px;\n  border: 1px solid #e2e2e2;\n  box-shadow:\n    inset 5px 5px 15px #d3d2d2ab,\n    inset -5px -5px 15px #e9e9e9ab;\n  mask-image: linear-gradient(\n    to bottom,\n    black calc(100% - 48px),\n    transparent 100%\n  );\n}\n.loader::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1.15em;\n  height: 4.5em;\n  background: #e0e0e0;\n  border-radius: 50px;\n  border: 1px solid #e2e2e2;\n  box-shadow:\n    inset 5px 5px 15px #d3d2d2ab,\n    inset -5px -5px 15px #e9e9e9ab;\n  mask-image: linear-gradient(\n    to top,\n    black calc(100% - 48px),\n    transparent 100%\n  );\n}\n.loaderA {\n  position: absolute;\n  width: 1.15em;\n  height: 13em;\n  border-radius: 50px;\n  background: transparent;\n}\n.ball0,\n.ball1,\n.ball2,\n.ball3,\n.ball4,\n.ball5,\n.ball6,\n.ball7,\n.ball8,\n.ball9 {\n  width: 1.15em;\n  height: 1.15em;\n  box-shadow:\n    rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,\n    rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,\n    rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset,\n    rgba(0, 0, 0, 0.06) 0px 2px 1px,\n    rgba(0, 0, 0, 0.09) 0px 4px 2px,\n    rgba(0, 0, 0, 0.09) 0px 8px 4px,\n    rgba(0, 0, 0, 0.09) 0px 16px 8px,\n    rgba(0, 0, 0, 0.09) 0px 32px 16px,\n    0px -1px 15px -8px rgba(0, 0, 0, 0.09);\n  border-radius: 50%;\n  transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4);\n  background-color: rgb(232, 232, 232, 1);\n  animation: 3.63s move ease-in-out infinite;\n}\n.loader:nth-child(2) {\n  transform: rotate(20deg);\n}\n.loader:nth-child(3) {\n  transform: rotate(40deg);\n}\n.loader:nth-child(4) {\n  transform: rotate(60deg);\n}\n.loader:nth-child(5) {\n  transform: rotate(80deg);\n}\n.loader:nth-child(6) {\n  transform: rotate(100deg);\n}\n.loader:nth-child(7) {\n  transform: rotate(120deg);\n}\n.loader:nth-child(8) {\n  transform: rotate(140deg);\n}\n.loader:nth-child(9) {\n  transform: rotate(160deg);\n}\n\n.loaderA:nth-child(2) {\n  transform: rotate(20deg);\n}\n.loaderA:nth-child(3) {\n  transform: rotate(40deg);\n}\n.loaderA:nth-child(4) {\n  transform: rotate(60deg);\n}\n.loaderA:nth-child(5) {\n  transform: rotate(80deg);\n}\n.loaderA:nth-child(6) {\n  transform: rotate(100deg);\n}\n.loaderA:nth-child(7) {\n  transform: rotate(120deg);\n}\n.loaderA:nth-child(8) {\n  transform: rotate(140deg);\n}\n.loaderA:nth-child(9) {\n  transform: rotate(160deg);\n}\n\n.ball1 {\n  animation-delay: 0.2s;\n}\n.ball2 {\n  animation-delay: 0.4s;\n}\n.ball3 {\n  animation-delay: 0.6s;\n}\n.ball4 {\n  animation-delay: 0.8s;\n}\n.ball5 {\n  animation-delay: 1s;\n}\n.ball6 {\n  animation-delay: 1.2s;\n}\n.ball7 {\n  animation-delay: 1.4s;\n}\n.ball8 {\n  animation-delay: 1.6s;\n}\n.ball9 {\n  animation-delay: 1.8s;\n}\n\n@keyframes move {\n  0% {\n    transform: translateY(0em);\n  }\n  50% {\n    transform: translateY(12em);\n  }\n  100% {\n    transform: translateY(0em);\n  }\n}\n',
      theme: 'light',
      type: 'loader',
      viewCount: 3658,
      originalPostId: null,
      user: {
        username: 'Praashoo7'
      },
      _count: {
        user_favorite_post: 80
      }
    },
    {
      id: '28818124-db51-4609-aff4-6012e06ae313',
      friendlyId: 'good-mouse-67',
      backgroundColor: '',
      html: '<button class="neu-button">Press me</button>',
      css: '.neu-button {\n  background-color: #e0e0e0;\n  border-radius: 50px;\n  box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;\n  color: #4d4d4d;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 15px 40px;\n  transition: all 0.2s ease-in-out;\n  border: 2px solid rgb(206, 206, 206);\n}\n\n.neu-button:hover {\n  box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;\n}\n\n.neu-button:focus {\n  outline: none;\n  box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;\n}',
      theme: 'light',
      type: 'button',
      viewCount: 3280,
      originalPostId: null,
      user: {
        username: 'adamgiebl'
      },
      _count: {
        user_favorite_post: 25
      }
    },
    {
      id: 'a9cd10c5-e66e-491a-87ad-84d3545b0c35',
      friendlyId: 'new-dingo-22',
      backgroundColor: '',
      html: '<label class="checkbox" for="checkbox1">\n  <span class="label">Checkbox</span>\n  <input checked="" id="checkbox1" type="checkbox">\n  <span class="checkmark"></span>\n</label>',
      css: '.checkbox {\n  display: flex;\n  align-items: center;\n  margin: 10px;\n  font-family: Arial, sans-serif;\n  color: black;\n}\n\n.checkbox input {\n  display: none;\n}\n\n.checkbox .checkmark {\n  width: 28px;\n  height: 28px;\n  border-radius: 10px;\n  background-color: #ffffff2b;\n  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, rgba(0, 0, 0, 0.21) 0px 0px 0px 24px inset,\n        #22cc3f 0px 0px 0px 0px inset, rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;\n  cursor: pointer;\n  position: relative;\n}\n\n.checkbox .checkmark::after {\n  content: "";\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  background-color: #e3e3e3;\n  box-shadow: transparent 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 6px 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: background-color 0.3s ease-in-out;\n}\n\n.checkbox input:checked + .checkmark {\n  background-color: #22cc3f;\n  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, #22cc3f 0px 0px 0px 2px inset, #22cc3f 0px 0px 0px 24px inset,\n        rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;\n}\n\n.checkbox input:checked + .checkmark::after {\n  background-color: white;\n}\n\n.checkbox .label {\n  margin-right: 10px;\n  user-select: none;\n  font-weight: 700;\n  cursor: pointer;\n}',
      theme: 'light',
      type: 'checkbox',
      viewCount: 7798,
      originalPostId: null,
      user: {
        username: 'adamgiebl'
      },
      _count: {
        user_favorite_post: 63
      }
    },
    {
      id: '85b437f7-bd94-40b3-9a00-033b550f76fe',
      friendlyId: 'witty-fly-56',
      backgroundColor: '',
      html: '<div class="container">\n<label class="switch">\n  <input class="togglesw" type="checkbox" checked="">\n  <div class="indicator left"></div>\n  <div class="indicator right"></div>\n  <div class="button"></div>\n</label>\n</div>',
      css: ".container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --hue: 220deg;\n  --width: 15rem;\n  --accent-hue: 22deg;\n  --duration: 0.6s;\n  --easing: cubic-bezier(1, 0, 1, 1);\n}\n\n.togglesw {\n  display: none;\n}\n\n.switch {\n  --shadow-offset: calc(var(--width) / 20);\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: var(--width);\n  height: calc(var(--width) / 2.5);\n  border-radius: var(--width);\n  box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),\n    inset -10px -10px 10px hsl(var(--hue) 20% 93%);\n}\n\n.indicator {\n  content: '';\n  position: absolute;\n  width: 40%;\n  height: 60%;\n  transition: all var(--duration) var(--easing);\n  box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),\n    inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),\n    inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);\n}\n\n.indicator.left {\n  --hue: var(--accent-hue);\n  overflow: hidden;\n  left: 10%;\n  border-radius: 100px 0 0 100px;\n  background: linear-gradient(180deg, hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%, hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%, hsl(var(--accent-hue) 90% 50%) 60%, hsl(var(--accent-hue) 90% 60%) 75%, hsl(var(--accent-hue) 90% 50%));\n}\n\n.indicator.left::after {\n  content: '';\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n}\n\n.indicator.right {\n  right: 10%;\n  border-radius: 0 100px 100px 0;\n  background-image: linear-gradient(180deg, hsl(var(--hue) 20% 95%), hsl(var(--hue) 20% 65%) 60%, hsl(var(--hue) 20% 70%) 70%, hsl(var(--hue) 20% 65%));\n}\n\n.button {\n  position: absolute;\n  z-index: 1;\n  width: 55%;\n  height: 80%;\n  left: 5%;\n  border-radius: 100px;\n  background-image: linear-gradient(160deg, hsl(var(--hue) 20% 95%) 40%, hsl(var(--hue) 20% 65%) 70%);\n  transition: all var(--duration) var(--easing);\n  box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),\n    2px 2px 6px hsl(var(--hue) 18% 50% / 40%),\n    10px 20px 10px hsl(var(--hue) 18% 50% / 40%),\n    20px 30px 30px hsl(var(--hue) 18% 50% / 60%);\n}\n\n.button::before, \n.button::after {\n  content: '';\n  position: absolute;\n  top: 10%;\n  width: 41%;\n  height: 80%;\n  border-radius: 100%;\n}\n\n.button::before {\n  left: 5%;\n  box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);\n  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 85%) 80%);\n}\n\n.button::after {\n  right: 5%;\n  box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);\n  background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 75%) 80%);\n}\n\n.togglesw:checked ~ .button {\n  left: 40%;\n}\n\n.togglesw:not(:checked) ~ .indicator.left,\n.togglesw:checked ~ .indicator.right {\n  box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),\n    inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),\n    inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);\n}",
      theme: 'light',
      type: 'switch',
      viewCount: 9484,
      originalPostId: null,
      user: {
        username: 'csemszepp'
      },
      _count: {
        user_favorite_post: 139
      }
    },
    {
      id: 'e4e67b63-e5ec-4514-9b78-a00454fa2211',
      friendlyId: 'angry-starfish-78',
      backgroundColor: '',
      html: '<label class="switch">\n  <input type="checkbox">\n  <span class="slider"></span>\n</label>',
      css: '/* The switch - the box around the slider */\n.switch {\n  font-size: 17px;\n  position: relative;\n  display: inline-block;\n  width: 3.5em;\n  height: 2em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);\n  transition: .4s;\n  border-radius: 5px;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 1.4em;\n  width: 0.1em;\n  border-radius: 0px;\n  left: 0.3em;\n  bottom: 0.3em;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #171717;\n  box-shadow: inset 2px 5px 10px rgb(0, 0, 0);\n}\n\ninput:checked + .slider:before {\n  transform: translateX(2.8em) rotate(360deg);\n}',
      theme: 'light',
      type: 'switch',
      viewCount: 11721,
      originalPostId: null,
      user: {
        username: 'Praashoo7'
      },
      _count: {
        user_favorite_post: 223
      }
    },
    {
      id: '1e55456a-3d85-4d36-9981-975f0bc8bef7',
      friendlyId: 'loud-walrus-26',
      backgroundColor: '',
      html: '<button>\n  <svg\n    class="empty"\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 24 24"\n    width="32"\n    height="32"\n  >\n    <path fill="none" d="M0 0H24V24H0z"></path>\n    <path\n      d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"\n    ></path>\n  </svg>\n  <svg\n    class="filled"\n    height="32"\n    width="32"\n    viewBox="0 0 24 24"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="M0 0H24V24H0z" fill="none"></path>\n    <path\n      d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"\n    ></path>\n  </svg>\n  Like\n</button>\n',
      css: 'button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 25px 20px 22px;\n  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  background-color: #e8e8e8;\n  border-color: #ffe2e2;\n  border-style: solid;\n  border-width: 9px;\n  border-radius: 35px;\n  font-size: 25px;\n  cursor: pointer;\n  font-weight: 900;\n  color: rgb(134, 124, 124);\n  font-family: monospace;\n  transition:\n    transform 400ms cubic-bezier(0.68, -0.55, 0.27, 2.5),\n    border-color 400ms ease-in-out,\n    background-color 400ms ease-in-out;\n  word-spacing: -2px;\n}\n\n@keyframes movingBorders {\n  0% {\n    border-color: #fce4e4;\n  }\n\n  50% {\n    border-color: #ffd8d8;\n  }\n\n  90% {\n    border-color: #fce4e4;\n  }\n}\n\nbutton:hover {\n  background-color: #eee;\n  transform: scale(105%);\n  animation: movingBorders 3s infinite;\n}\n\nbutton svg {\n  margin-right: 11px;\n  fill: rgb(255, 110, 110);\n  transition: opacity 100ms ease-in-out;\n}\n\n.filled {\n  position: absolute;\n  opacity: 0;\n  top: 20px;\n  left: 22px;\n}\n\n@keyframes beatingHeart {\n  0% {\n    transform: scale(1);\n  }\n\n  15% {\n    transform: scale(1.15);\n  }\n\n  30% {\n    transform: scale(1);\n  }\n\n  45% {\n    transform: scale(1.15);\n  }\n\n  60% {\n    transform: scale(1);\n  }\n}\n\nbutton:hover .empty {\n  opacity: 0;\n}\n\nbutton:hover .filled {\n  opacity: 1;\n  animation: beatingHeart 1.2s infinite;\n}\n',
      theme: 'light',
      type: 'button',
      viewCount: 11972,
      originalPostId: null,
      user: {
        username: 'LilaRest'
      },
      _count: {
        user_favorite_post: 340
      }
    },
    {
      id: '16258831-bb09-4722-a2c9-90faad82b55a',
      friendlyId: 'ancient-walrus-24',
      backgroundColor: '',
      html: '<button>Click me</button>\n',
      css: 'button {\n  color: #090909;\n  padding: 0.7em 1.7em;\n  font-size: 18px;\n  border-radius: 0.5em;\n  background: #e8e8e8;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  transition: all 0.3s;\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n}\n\nbutton:active {\n  color: #666;\n  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\n}\n',
      theme: 'light',
      type: 'button',
      viewCount: 61528,
      originalPostId: null,
      user: {
        username: 'ke1221'
      },
      _count: {
        user_favorite_post: 370
      }
    },
    {
      id: '8f1fb1dd-0259-4755-a870-8c84dc49827f',
      friendlyId: 'orange-earwig-38',
      backgroundColor: '',
      html: '\n<div class="card"></div>',
      css: '.card {\n width: 190px;\n height: 254px;\n border-radius: 50px;\n background: #e0e0e0;\n box-shadow: 20px 20px 60px #bebebe,\n               -20px -20px 60px #ffffff;\n}',
      theme: 'light',
      type: 'card',
      viewCount: 21958,
      originalPostId: null,
      user: {
        username: 'Codewithvinay'
      },
      _count: {
        user_favorite_post: 391
      }
    },
    {
      id: '95417742-4d24-4ccd-91d5-d1de908e239f',
      friendlyId: 'great-skunk-8',
      backgroundColor: '',
      html: '<label class="label">\n    <div class="toggle">\n        <input class="toggle-state" type="checkbox" name="check" value="check">\n        <div class="indicator"></div>\n    </div>\n</label>',
      css: '.label {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  color: #394a56;\n}\n\n.label-text {\n  margin-left: 16px;\n}\n\n.toggle {\n  isolation: isolate;\n  position: relative;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: -8px -4px 8px 0px #ffffff,\n    8px 4px 12px 0px #d1d9e6,\n    4px 4px 4px 0px #d1d9e6 inset,\n    -4px -4px 4px 0px #ffffff inset;\n}\n\n.toggle-state {\n  display: none;\n}\n\n.indicator {\n  height: 100%;\n  width: 200%;\n  background: #ecf0f3;\n  border-radius: 15px;\n  transform: translate3d(-75%, 0, 0);\n  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n  box-shadow: -8px -4px 8px 0px #ffffff,\n    8px 4px 12px 0px #d1d9e6;\n}\n\n.toggle-state:checked ~ .indicator {\n  transform: translate3d(25%, 0, 0);\n}',
      theme: 'light',
      type: 'switch',
      viewCount: 16871,
      originalPostId: null,
      user: {
        username: 'mobinkakei'
      },
      _count: {
        user_favorite_post: 388
      }
    }
  ]
}
