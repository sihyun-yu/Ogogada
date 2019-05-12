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
    props.historyList[props.historyIndex][1] == props.id && props.level >= 4) {
    return (
        <Button
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
