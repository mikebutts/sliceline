import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { FoodDialog } from "./components/FoodDialog/FoodDialog";
import { Order } from "./components/Order/Order";
import { Banner } from "./components/Banner/Banner";
import { GlobalStyle } from "./styles/globalStyles";
function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <React.Fragment>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </React.Fragment>
  );
}

export default App;
