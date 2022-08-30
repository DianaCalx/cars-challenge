import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = {
  colors: {
    mainColor: "#fdfd96",
    secondaryColor : "#77dd77",
    errorColor: "#ff6961",
    successColor: "#84b6f4",
    neutralColor: "#fdcae1"
  }
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
