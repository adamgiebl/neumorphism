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
    codeString: `.soft-shadow {
      background: linear-gradient(145deg);
      box-shadow: 30px 30px var(--blur) var(--lightColor), 
                  -30px -30px var(--blur) var(--darkColor);
    }`
  }

  myRef = React.createRef();
  body = document.getElementsByTagName('body')[0];

  lightColor = ""
  darkColor = ""

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

  componentDidMount() {
    this.setState({ color: "#968bf9" })
  }

  render() {
    const { blur, color, size, radius, shape, codeString } = this.state;
    if (this.myRef.current) {
      document.documentElement.style.setProperty('--blur', blur + 'px')
      this.myRef.current.style.setProperty('--size', size + 'px')
      this.myRef.current.style.setProperty('--radius', radius + 'px')
      document.documentElement.style.setProperty('--textColor', getContrast(color))
      document.documentElement.style.setProperty('--baseColor', color)
      document.documentElement.style.setProperty('--lightColor', colorLuminance(color, -0.15))
      document.documentElement.style.setProperty('--darkColor', colorLuminance(color, 0.15))
      document.documentElement.style.setProperty('--firstGradientColor', colorLuminance(color, shape ? 0.07 : -0.10))
      document.documentElement.style.setProperty('--secondGradientColor', colorLuminance(color, shape ? - 0.10 : 0.07))
    }
    return (
      <Container className="App">
        <h1><b>Soft</b> UI code</h1>
        <Flex>
          <Preview>
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
                {codeString}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
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
