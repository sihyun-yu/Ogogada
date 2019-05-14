import React from "react";
import { Image, Button } from 'semantic-ui-react'

var gifticonStyle = {
  padding: "1px",
  height:"14.5vh",
  "font-size": "18px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "color": "black",
  "flex-direction": "coloumn"
};

const GifticonComponent = props => {
  if (props.level >= 4) {
    return (
      <Button
        color='grey'
        style={gifticonStyle}
        className="gifticon-item"
        onClick={() => {
          props.handleGifticonDialog();
        }}
      >
      GIFTICON
      </Button>
  );
  }

  else {
  return (
        <Button
          color='grey'
          style={gifticonStyle}
          className="hide-item">
        <div className="hide-item__image">
          <Image tiny className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
    </Button>
    );    
  }
};

export default GifticonComponent;
