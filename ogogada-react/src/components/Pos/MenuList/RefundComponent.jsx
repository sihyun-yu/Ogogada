import React from "react";
import { Image, Button } from 'semantic-ui-react'

var refundStyle = {
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

const RefundComponent = props => {
  if (props.level>=5) {
    return (
        <Button
          color='grey'
          style={refundStyle}
          className="refund-item"
          onClick={() => {
            props.handleRefundDialog();
  //          props.handleChangeMenuDisplay(props.status);
          }}
        >
        REFUND
        </Button>
    );
  }
  else {
  return (
        <Button
          color='grey'
          style={refundStyle}
          className="hide-item">
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
    </Button>
    );    
  }
};

export default RefundComponent;
