import React from "react";
import { Image, Button } from 'semantic-ui-react'

var gifticonStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

var borderGifticonStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh",
  border: "5px solid red"
};

const GifticonComponent = props => {
  if (props.historyList[props.historyIndex][0] == 'gift' &&
    props.historyList[props.historyIndex][1] == props.id) {
    return (
        <Button
          style={borderGifticonStyle}
          className="gifticon-item"
          onClick={() => {
            props.handleGifticonDialog();
            props.historyCheck(props.level, 'gift', props.id);
          }}
        >
        GIFTICON
        </Button>
    );
  }
  else {
    return (
        <Button
          style={gifticonStyle}
          className="gifticon-item"
        >
        GIFTICON
        </Button>
    );    
  }
};

export default GifticonComponent;
