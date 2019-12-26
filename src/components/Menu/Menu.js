import React from "react";
import styled from "styled-components";

import { foodItems, foods } from "../../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1> {sectionName} </h1>
          <FoodGrid>
            {foods.map(food => (
              <Food img={food.img}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{food.price}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};

export default Menu;
