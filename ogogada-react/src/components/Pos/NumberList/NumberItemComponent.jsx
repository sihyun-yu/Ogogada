import React from "react";
import { Button } from 'semantic-ui-react'

const NumberItemComponent = props => {
  return (
    <div className="number-item">
      <Button
        className="number-item__button"
        variant="contained">
       {props.number}
      </Button>
    </div>
  );
};

export default NumberItemComponent;
