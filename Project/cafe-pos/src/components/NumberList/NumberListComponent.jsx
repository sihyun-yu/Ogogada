import React from "react";
import { Subscribe } from "unstated";
import NumberItem from "./NumberItemComponent.jsx";
import { NumberStore } from "../../stores";

import "../../stylesheets/NumberList.css";

const NumberListComponent = props => {
  return (
    <div className="number-list__container">
      <Subscribe to={[NumberStore]}>
        {number => (
          <div className="number-list">
            {number.state.numbers.map((numberItem) => (
              <NumberItem
                number={numberItem}
                handleAddSelectedNumbers={number.addSelectedNumber.bind(number)}
              />
            ))}
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default NumberListComponent;
