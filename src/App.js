import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

import { Banner } from "./components/Banner/Banner";
import { GlobalStyle } from "./styles/globalStyles";
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
