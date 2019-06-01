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

var borderGifticonStyle = {
  padding: "1px",
  height:"14.5vh",
  "font-size": "18px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "color": "black",
  "flex-direction": "coloumn",
  border: "5px solid red"
};

const GifticonComponent = props => {
  if (props.historyList[props.historyIndex][0] == 'gift' &&
    props.historyList[props.historyIndex][1] == props.id && props.level >= 4) {
    return (
        <Button
          color='grey'
          style={borderGifticonStyle}
          className="gifticon-item"
          onClick={() => {
            props.historyCheck(props.level, 'gift', props.id);
            props.handleGifticonDialog();
          }}
        >
        GIFTICON
        </Button>
    );
  }
  else if (props.level >= 4){
    return (
        <Button
          color='grey'
          style={gifticonStyle}
          className="gifticon-item"
        >
        GIFTICON
        </Button>
    );    
  }

  else {
  return (
        <Button
          style={gifticonStyle}
          className="hide-item">
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
    </Button>
    );    
  }
};

export default GifticonComponent;
