import React, { Component } from "react";
import colorLuminance, { getContrast } from "./lightendarken";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import styled from 'styled-components';
import { prism as Light, atomDark as Dark } from "react-syntax-highlighter/dist/esm/styles/prism/";

SyntaxHighlighter.registerLanguage("css", css);

class App extends Component {
  state = {
    color: "#55b9f3",
    size: 300,
    radius: 50,
    maxRadius: 150,
    inset: false,
    gradient: true,
    shape: 3,
    distance: 30,
    blur: 60,
    activeLightSource: 0,
    colorDifference: 0.15,
    maxSize: 410
  };

  softElement = React.createRef();
  colorInput = React.createRef();
  codeContainer = React.createRef();
  code = React.createRef();
  body = document.getElementsByTagName("body")[0];
  lightSources = [];

  lightColor = "";
  darkColor = "";
  theme = true;

  codeString = `background: linear-gradient(145deg);
box-shadow: 30px 30px var(--blur) var(--lightColor), 
            -30px -30px var(--blur) var(--darkColor);`;

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  setDistance = e => {
    this.setState({
      distance: e.target.value,
      blur: e.target.value * 2
    });
  } 

  setSize = ({ target }) => {
    this.setState({
      size: target.value,
      distance: Math.round(target.value * 0.1),
      blur: Math.round(target.value * 0.2),
      maxRadius: Math.round(target.value / 2)
    });
  }

  validateColor = e => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      this.handleOnChange(e);
      window.history.replaceState('homepage', 'Title', '/' + e.target.value);
    }
  }

  setColor = e => {
    window.history.replaceState('homepage', 'Title', '/' + e.target.value);
    this.handleOnChange(e);
  }

  setShape = (e) => {
    if (parseInt(e.target.dataset.shape) === 2 || parseInt(e.target.dataset.shape) === 3) {
      this.setState({
        shape: parseInt(e.target.dataset.shape),
        gradient: true
      });
    }
    else {
      this.setState({
        shape: parseInt(e.target.dataset.shape),
        gradient: false
      });
    }
  };

  setLightSource = e => {
    this.lightSources.forEach(e => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    this.setState({ activeLightSource: parseInt(e.target.dataset.value) });
  };

  copyToClipboard = e => {
    const el = this.codeContainer.current;
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand("copy");
    this.code.current.classList.add('copied')
    
    setTimeout(() => {
      this.code.current.classList.remove('copied')
    }, 1000);
  };

  setColorFromRoute = () => {
    // eslint-disable-next-line eqeqeq
    if (window.location.hash != 0) {
      if (/^#[0-9A-F]{6}$/i.test(window.location.hash)) {
        this.setState({ color: window.location.hash });
      }
    }
  }

  componentDidMount() {
    window.onpopstate = this.setColorFromRoute;
    this.setState({ color: "#55b9f3" });
    this.setColorFromRoute();
    window.history.replaceState('homepage', 'Title', '/' + this.state.color);
    this.lightSources = [...document.getElementsByClassName("light-source")];
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000 && window.navigator.userAgent !== "ReactSnap") {
      if (windowWidth < 800) {
        if (windowWidth < 680) {
          this.setState({ maxSize: 180, size: 150 });
        }
        else {
          this.setState({ maxSize: 250, size: 200 });
        }
      }
      else {
        this.setState({ maxSize: 350, size: 250 });
      }
    }
    else {
      this.setState({ maxSize: 410, size: 300 });
    }
  }

  render() {
    const { blur, color, size, radius, shape, distance, activeLightSource, colorDifference, maxSize, maxRadius, gradient } = this.state;
    if (this.softElement.current) {
      let angle = 145;
      let positionX = 30;
      let positionY = 30;
      const darkColor = colorLuminance(color, colorDifference * -1);
      const lightColor = colorLuminance(color, colorDifference);
      const firstGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 2 ? 0.07 : -0.1) : color;
      const secondGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 3 ? 0.07 : -0.1) : color;
      switch (activeLightSource) {
        case 1:
          positionX = distance;
          positionY = distance;
          angle = 145;
          break;
        case 2:
          positionX = distance * -1;
          positionY = distance;
          angle = 225;
          break;
        case 3:
          positionX = distance * -1;
          positionY = distance * -1;
          angle = 315;
          break;
        case 4:
          positionX = distance;
          positionY = distance * -1;
          angle = 45;
          break;
        default:
          positionX = distance;
          positionY = distance;
          angle = 145;
          break;
      }
      this.colorInput.current.value = color;
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
      `;
      if (shape === 1) {
        this.softElement.current.classList.add('pressed'); 
      }
      else {
        this.softElement.current.classList.remove('pressed'); 
      }
      
      this.softElement.current.style.setProperty("--size", size + "px");  
      this.softElement.current.style.setProperty("--radius", radius + "px");
      if (getContrast(color) === '#001f3f') { this.theme = true }
      else { this.theme = false }
      this.codeString = `border-radius: ${parseInt(radius) === maxRadius ? '50%' : radius + 'px'};
background: ${gradient && shape !== 1 ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})` : `${color}`};
box-shadow: ${shape === 1 ? 'inset' : ''} ${positionX}px ${positionY}px ${blur}px ${darkColor}, 
            ${shape === 1 ? 'inset' : ''} ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor};`;
    }
    return (
      <div className="container App">
        <div className="flex">
          <div className="preview">
            <Sun
              top="0"
              bottom="unset"
              right="0"
              left="unset"
              data-value="2"
              onClick={this.setLightSource}
              className="light-source"
            ></Sun>
            <Sun
              top="0"
              bottom="unset"
              right="unset"
              left="0"
              data-value="1"
              onClick={this.setLightSource}
              className="light-source active"
            ></Sun>
            <Sun
              top="unset"
              bottom="0"
              right="0"
              left="unset"
              data-value="3"
              onClick={this.setLightSource}
              className="light-source"
            ></Sun>
            <Sun
              top="unset"
              bottom="0"
              right="unset"
              left="0"
              data-value="4"
              onClick={this.setLightSource}
              className="light-source"
            ></Sun>
            <div ref={this.softElement} className="soft-element soft-shadow"></div>
          </div>
          <div className="configuration soft-shadow">
            <div className="row">
              <label htmlFor="color">Pick a color:</label>  
              <input
                type="color"
                name="color"
                onChange={this.setColor}
                placeholder="#ffffff"
                value={color}
                id="color"
              />
              <label htmlFor="colorInput" style={{ paddingLeft: "10px" }}>or</label>
              <input
                type="text"
                placeholder="#ffffff"
                name="color"
                id="colorInput"
                ref={this.colorInput}
                onChange={this.validateColor}
              />
            </div>
            <div className="row">
              <label htmlFor="size">Size: </label>
              <input
                type="range"
                name="size"
                value={size}
                onChange={this.setSize}
                min="10"
                max={maxSize}
                step="1"
                id="size"
              />
            </div>
            <div className="row">
              <label htmlFor="radius">Radius: </label>
              <input
                type="range"
                name="radius"
                value={radius}
                onChange={this.handleOnChange}
                min="0"
                max={maxRadius}
                step="1"
                id="radius"
              />
            </div>
            <div className="row">
              <label htmlFor="distance">Distance: </label>
              <input
                type="range"
                name="distance"
                value={distance}
                onChange={this.setDistance}
                min="5"
                max="50"
                step="1"
                id="distance"
              />
            </div>
            <div className="row">
              <label htmlFor="colorDifference">Intensity: </label>
              <input
                type="range"
                name="colorDifference"
                value={colorDifference}
                onChange={this.handleOnChange}
                min="0.01"
                max="0.6"
                step="0.01"
                id="colorDifference"
              />
            </div>
            <div className="row">
              <label htmlFor="blur">Blur: </label>
              <input
                type="range"
                name="blur"
                value={blur}
                onChange={this.handleOnChange}
                min="0"
                max="100"
                step="1"
                id="blur"
              />
            </div>
            <div className="row row--checkbox">
              <label htmlFor="gradient">Gradient background: </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="gradient"
                  checked={gradient}
                  onChange={this.handleCheckbox}
                  id="gradient"
                />
                <span></span>
              </label>
            </div>
            <div className="row">
              <label>Shape: </label>
              <div className="shape-switch">
                <button
                  className={shape === 2 ? "active" : ""}
                  onClick={this.setShape}
                  name="concave"
                  title="Concave"
                  data-shape="2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="145" height="24" viewBox="0 0 145 24" fill="none" stroke="white">
                    <path d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145" stroke="inherit" strokeWidth="6"/>
                  </svg>
                </button>
                <button
                  className={shape === 3 ? "active" : ""}
                  onClick={this.setShape}
                  name="convex"
                  title="Convex"
                  data-shape="3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="145" height="33" viewBox="0 0 145 33" fill="none" stroke="white">
                    <path d="M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145" stroke="inherit" strokeWidth="6"/>
                  </svg>
                </button>
                <button
                  className={shape === 1 ? "active" : ""}
                  onClick={this.setShape}
                  name="pressed"
                  title="Pressed"
                  data-shape="1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="145" height="24" viewBox="0 0 145 24" fill="none" stroke="white">
                    <path d="M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145" stroke="inherit" strokeWidth="6"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className={`code-block ${this.theme ? "" : "small"}`} ref={this.code}>
              <button className="copy" onClick={this.copyToClipboard}>Copy</button>
              <SyntaxHighlighter language="css" style={this.theme ? Dark : Light}>
                {this.codeString}
              </SyntaxHighlighter>
              <label htmlFor="code-container" className="hidden">hidden</label>
              <textarea id="code-container" ref={this.codeContainer} value={this.codeString} readOnly></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Sun = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 2px solid var(--textColor);
  border-bottom-right-radius: ${props => props.right === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-bottom-left-radius: ${props => props.left === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-top-right-radius: ${props => props.right === "unset" && props.top === "unset" ? "30px" : "unset"};
  border-top-left-radius: ${props => props.left === "unset" && props.top === "unset" ? "30px" : "unset"};

  &.active {
    background: #ffff00;
  }
`

export default App;
