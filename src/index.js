import React from 'react';
import { hydrate, render } from "react-dom";
import './index.scss';
import './inputs.scss';
import App from './App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}