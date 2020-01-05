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
    shape: true,
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
    this.setState({
      shape: e.target.dataset.value
    });
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
    const windowWidth = window.outerWidth;
    if (windowWidth < 1000 && windowWidth !== 0) {
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
    const { blur, color, size, radius, shape, distance, activeLightSource, colorDifference, maxSize, maxRadius } = this.state;
    if (this.softElement.current) {
      let angle = 145;
      let positionX = 30;
      let positionY = 30;
      const darkColor = colorLuminance(color, colorDifference * -1);
      const lightColor = colorLuminance(color, colorDifference);
      const firstGradientColor = colorLuminance(color, shape ? 0.07 : -0.1);
      const secondGradientColor = colorLuminance(color, shape ? -0.1 : 0.07);
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
      this.softElement.current.style.setProperty("--size", size + "px");  
      this.softElement.current.style.setProperty("--radius", radius + "px");
      if (getContrast(color) === '#001f3f') { this.theme = true }
      else { this.theme = false }
      this.codeString = `border-radius: ${parseInt(radius) === maxRadius ? '50%' : radius + 'px'};
background: linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor});
box-shadow: ${positionX}px ${positionY}px ${blur}px ${darkColor}, 
            ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor};`;
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
                max="200"
                step="1"
                id="blur"
              />
            </div>
            <div className="row">
              <label htmlFor="shape">Shape: </label>
              <div className="shape-switch">
                <button
                  className={shape ? "active" : ""}
                  onClick={this.setShape}
                  data-value=" "
                >
                  Concave
                </button>
                <button
                  className={!shape ? "active" : ""}
                  onClick={this.setShape}
                  data-value=""
                >
                  Convex
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
