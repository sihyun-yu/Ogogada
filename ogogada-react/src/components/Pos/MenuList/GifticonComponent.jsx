import React from "react";
import { Image, Button } from 'semantic-ui-react'

const GifticonComponent = props => {
  return (
      <Button
        className="gifticon-item"
        onClick={() => {
//          props.handleChangeMenuDisplay(props.status);
        }}
      >
      GIFTICON
      </Button>
  );
};

export default GifticonComponent;
