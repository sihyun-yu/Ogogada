import React from "react";
import { Image, Button } from 'semantic-ui-react'

var gifticonStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

const GifticonComponent = props => {
  if (props.level >= 4) {
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
  }

  else {
  return (
        <Button
      className="hide-item">
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
        <div className="hide-item__name">Hidden</div>
    </Button>
    );    
  }
};

export default GifticonComponent;
