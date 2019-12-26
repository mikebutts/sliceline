import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { createGlobalStyle } from "styled-components";
import { Banner } from "./components/Banner/Banner";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;

  }`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </React.Fragment>
  );
}

export default App;
