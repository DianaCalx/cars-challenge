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
    mainColor: "#0352db",
    secondaryColor : "#ABABAF",
    errorColorLight: "#f52e2ef6",
    errorColorDark: "#e00000",
    successColor: "#1e78ff",
    successColor2: "#0066ff",
    neutralColor: "#f8f9fa",
    darkColor: "#ffb838",
    darkColor2: "rgb(255, 166, 0)",
    starColor: '#c06500'
  },
  gradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%)"
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
