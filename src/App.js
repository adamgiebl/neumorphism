import React, { Component } from 'react';
import styled from 'styled-components';
import colorLuminance, { getContrast } from './lightendarken';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


class App extends Component {
  state = {
    color: "",
    size: 300,
    radius: 30,
    shape: true,
    blur: 60,
    activeLightSource: 0
  }

  myRef = React.createRef();
  body = document.getElementsByTagName('body')[0];
  lightSources = []

  lightColor = ""
  darkColor = ""

  codeString = `background: linear-gradient(145deg);
box-shadow: 30px 30px var(--blur) var(--lightColor), 
            -30px -30px var(--blur) var(--darkColor);`

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleShape = () => {
    this.setState({
      shape: !this.state.shape
    })
  }

  setLightSource = (e) => {
    this.lightSources.forEach((e)=>{
      e.classList.remove('active');
    });
    e.target.classList.add('active');
    this.setState({ activeLightSource: parseInt(e.target.dataset.value)});
  }

  componentDidMount() {
    this.setState({ color: "#968bf9" });
    this.lightSources = [...document.getElementsByClassName('light-source')];
  }

  render() {
    const { blur, color, size, radius, shape, activeLightSource } = this.state;
    if (this.myRef.current) {
      let angle = 145;
      let positionX = 30;
      let positionY = 30;
      const darkColor = colorLuminance(color, -0.15);
      const lightColor = colorLuminance(color, 0.15);
      const firstGradientColor = colorLuminance(color, shape ? 0.07 : -0.10);
      const secondGradientColor = colorLuminance(color, shape ? -0.10 : 0.07);
      switch(activeLightSource) {
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
      document.documentElement.style.setProperty('--positionX', `${positionX}px`);
      document.documentElement.style.setProperty('--positionXOpposite', `${positionX * -1}px`);
      document.documentElement.style.setProperty('--positionY', `${positionY}px`);
      document.documentElement.style.setProperty('--positionYOpposite', `${positionY * -1}px`);
      document.documentElement.style.setProperty('--angle', `${angle}deg`);
      document.documentElement.style.setProperty('--blur', `${blur}px`);
      document.documentElement.style.setProperty('--textColor', getContrast(color));
      document.documentElement.style.setProperty('--baseColor', color);
      document.documentElement.style.setProperty('--darkColor', darkColor);
      document.documentElement.style.setProperty('--lightColor', lightColor);
      document.documentElement.style.setProperty('--firstGradientColor', firstGradientColor);
      document.documentElement.style.setProperty('--secondGradientColor', secondGradientColor);
      this.myRef.current.style.setProperty('--size', size + 'px')
      this.myRef.current.style.setProperty('--radius', radius + 'px')

      this.codeString = `background: linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor});
box-shadow: ${positionX}px ${positionY}px ${blur}px ${darkColor}, 
            ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor};`
    }
    return (
      <Container className="App">
        <h1><b>Soft</b> UI code</h1>
        <Flex>
          <Preview>
            <Sun top="0" bottom="unset" right="0" left="unset" data-value="2" onClick={this.setLightSource} className="light-source"></Sun>
            <Sun top="0" bottom="unset" right="unset" left="0" data-value="1" onClick={this.setLightSource} className="light-source active"></Sun>
            <Sun top="unset" bottom="0" right="0" left="unset" data-value="3" onClick={this.setLightSource} className="light-source"></Sun>
            <Sun top="unset" bottom="0" right="unset" left="0" data-value="4" onClick={this.setLightSource} className="light-source"></Sun>
            <div
              ref={this.myRef}
              className="soft-element soft-shadow"
            ></div>
          </Preview>
          <Configuration className="soft-shadow">
            <input type="color" name="color" onChange={this.handleOnChange} placeholder="#ffffff"/>
            <Slider 
              type="range"
              name="size" 
              value={size}
              onChange={this.handleOnChange}
              min="10"
              max="350"
              step="1"
            />
            <Slider 
              type="range"
              name="radius" 
              value={radius}
              onChange={this.handleOnChange}
              min="0"
              max="200"
              step="1"
            />
            <Slider 
              type="range"
              name="blur" 
              value={blur}
              onChange={this.handleOnChange}
              min="0"
              max="200"
              step="1"
            />
            <ShapeSwitch>
              <button className={shape ? "active" : ""} onClick={this.toggleShape}>
                Concave
              </button>
              <button className={!shape ? "active" : ""} onClick={this.toggleShape}>
                Convex
              </button>
            </ShapeSwitch>
            <CodeBlock>
              <SyntaxHighlighter language="css" style={atomDark}>
                {this.codeString}
              </SyntaxHighlighter>
            </CodeBlock>
          </Configuration>
        </Flex>
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 1000px;
  height: 600px;
  width: 100%;
  text-align:center;
`

const Flex = styled.div`
  display: flex;
`

const Preview = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  margin-right: 50px;
`

const Sun = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background: #ffff00;
  height: 30px;
  width: 30px;
  opacity: 0.3;
  cursor: pointer;
  border: 2px solid var(--textColor);
  border-bottom-right-radius: ${props => props.right === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-bottom-left-radius: ${props => props.left === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-top-right-radius: ${props => props.right === "unset" && props.top === "unset" ? "30px" : "unset"};
  border-top-left-radius: ${props => props.left === "unset" && props.top === "unset" ? "30px" : "unset"};

  &.active {
    opacity: 1;
  }
`

const Slider = styled.input`

`

const CodeBlock = styled.div`
  font-size: 10px;
`

const ShapeSwitch = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 3px;
  //border: 2px solid var(--textColor);


  button {
    flex-grow: 1;
    padding: 10px 15px;
    background: #30302F;
    color: #F6F5F7;
    cursor: pointer;
    border: none;

    &:first-child {
      //border-right: 2px solid var(--textColor);
    }

    &.active {
      background: #1D1D1B;
    }
  }
`

const Configuration = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 30px;
  text-align: left;

  > * {
    margin-bottom: 20px;
  }
`

export default App;
