import React, { Component } from "react";
import colorLuminance, { getContrast } from "./lightendarken";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import { solarizedlight as Light, atomDark as Dark } from "react-syntax-highlighter/dist/esm/styles/prism/";
import * as s from "./App.style";

SyntaxHighlighter.registerLanguage("css", css);

class App extends Component {
  state = {
    color: "#aab7ea",
    size: 300,
    radius: 80,
    shape: true,
    blur: 60,
    activeLightSource: 0,
    colorDifference: 0.15
  };

  softElement = React.createRef();
  colorInput = React.createRef();
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

  validateColor = e => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      this.handleOnChange(e);
    }
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

  componentDidMount() {
    this.setState({ color: "#aab7ea" });
    this.lightSources = [...document.getElementsByClassName("light-source")];
  }

  render() {
    const { blur, color, size, radius, shape, activeLightSource, colorDifference } = this.state;
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
          positionX = 30;
          positionY = 30;
          angle = 145;
          break;
        case 2:
          positionX = -30;
          positionY = 30;
          angle = 225;
          break;
        case 3:
          positionX = -30;
          positionY = -30;
          angle = 315;
          break;
        case 4:
          positionX = 30;
          positionY = -30;
          angle = 45;
          break;
        default:
          positionX = 30;
          positionY = 30;
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
      this.codeString = `border-radius: ${radius === "200" ? '50%' : radius + 'px'};
background: linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor});
box-shadow: ${positionX}px ${positionY}px ${blur}px ${darkColor}, 
            ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor};`;
    }
    return (
      <s.Container className="App">
        <s.Flex>
          <s.Preview>
            <s.Sun
              top="0"
              bottom="unset"
              right="0"
              left="unset"
              data-value="2"
              onClick={this.setLightSource}
              className="light-source"
            ></s.Sun>
            <s.Sun
              top="0"
              bottom="unset"
              right="unset"
              left="0"
              data-value="1"
              onClick={this.setLightSource}
              className="light-source active"
            ></s.Sun>
            <s.Sun
              top="unset"
              bottom="0"
              right="0"
              left="unset"
              data-value="3"
              onClick={this.setLightSource}
              className="light-source"
            ></s.Sun>
            <s.Sun
              top="unset"
              bottom="0"
              right="unset"
              left="0"
              data-value="4"
              onClick={this.setLightSource}
              className="light-source"
            ></s.Sun>
            <div ref={this.softElement} className="soft-element soft-shadow"></div>
          </s.Preview>
          <s.Configuration className="soft-shadow">
            <s.Row>
              <span style={{ paddingRight: "10px" }}>Select color:</span>
              <input
                type="color"
                name="color"
                onChange={this.handleOnChange}
                placeholder="#ffffff"
                value={color}
              />
              <span style={{ margin: "0 10px" }}>or</span>
              <input
                type="text"
                placeholder="#ffffff"
                name="color"
                ref={this.colorInput}
                onChange={this.validateColor}
              />
            </s.Row>
            <s.Row>
              <label htmlFor="size" style={{ paddingRight: "10px" }}>Size: </label>
              <s.Slider
                type="range"
                name="size"
                value={size}
                onChange={this.handleOnChange}
                min="10"
                max="350"
                step="1"
              />
            </s.Row>
            <s.Row>
              <label htmlFor="colorDifference" style={{ paddingRight: "10px" }}>Colors: </label>
              <s.Slider
                type="range"
                name="colorDifference"
                value={colorDifference}
                onChange={this.handleOnChange}
                min="0.01"
                max="0.6"
                step="0.01"
              />
            </s.Row>
            <s.Row>
            <label htmlFor="radius" style={{ paddingRight: "10px" }}>Radius: </label>
            <s.Slider
              type="range"
              name="radius"
              value={radius}
              onChange={this.handleOnChange}
              min="0"
              max="200"
              step="1"
            />
            </s.Row>
            <s.Row>
            <label htmlFor="blur" style={{ paddingRight: "10px" }}>Blur: </label>
            <s.Slider
              type="range"
              name="blur"
              value={blur}
              onChange={this.handleOnChange}
              min="0"
              max="200"
              step="1"
            />
            </s.Row>
            <s.Row>
              <label htmlFor="blur" style={{ paddingRight: "10px" }}>Shape: </label>
              <s.ShapeSwitch>
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
              </s.ShapeSwitch>
            </s.Row>
            <s.CodeBlock>
              <SyntaxHighlighter language="css" style={this.theme ? Dark : Light}>
                {this.codeString}
              </SyntaxHighlighter>
            </s.CodeBlock>
          </s.Configuration>
        </s.Flex>
      </s.Container>
    );
  }
}

export default App;
