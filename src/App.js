import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { FoodDialog } from "./components/FoodDialog/FoodDialog";
import { Order } from "./components/Order/Order";
import { Banner } from "./components/Banner/Banner";
import { GlobalStyle } from "./styles/globalStyles";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });
  return (
    <React.Fragment>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </React.Fragment>
  );
}

export default App;
