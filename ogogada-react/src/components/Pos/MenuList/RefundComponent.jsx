import React from "react";
import { Image, Button } from 'semantic-ui-react'

var refundStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

const RefundComponent = props => {
  if (props.level>=5) {
    return (
        <Button
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
      className="hide-item">
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
        <div className="hide-item__name">Hidden</div>
    </Button>
    );    
  }
};

export default RefundComponent;
