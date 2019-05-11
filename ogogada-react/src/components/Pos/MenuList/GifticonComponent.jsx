import React from "react";
import { Image, Button } from 'semantic-ui-react'

var gifticonStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

const GifticonComponent = props => {
  return (
      <Button
        style={gifticonStyle}
        className="gifticon-item"
        onClick={() => {
          props.handleGifticonDialog();
        }}
      >
      GIFTICON
      </Button>
  );
};

export default GifticonComponent;
