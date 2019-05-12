import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "./GifticonDialogComponent.css"

const RefundDialogComponent = props => {
    console.log("refunddialogcomponent ", props);
	if (props.open == true && props.isConfirmed == false) {
        return (
        <div class="gifticon-container">
            <div class="gifticon-title">
                Orders List
            </div>
            <div class="gifticon-code" onClick={props.selectRefund}>
                most recent order
            </div>
            <div class="gifticon-code" >
                adfadsfdasfdasfd
            </div>

            <Button
            className="gifticon-dialog__button"
            disabled={props.refundIdx == -1}
            style={{ marginLeft: "50px", marginRight: "10px" }}
            variant="contained"
            color="primary"
            size="massive"
            onClick={props.confirm }>
                Refund
            </Button>
            <Button
            className="gifticon-dialog__button"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            variant="contained"
            color="secondary"
            size="massive"
            onClick={props.closeRefund}>
                Cancel
            </Button>
            
        </div>
        )
    }
    else if (props.open == true && props.isConfirmed == true){
        return (
            <div class="gifticon-container">
            <div class="gifticon-title">
                SUCCESS!
            </div>
            <div class="gifticon-code">
                the order is now refunded!
            </div>

            <Button
            className="gifticon-dialog__button"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            variant="contained"
            color="secondary"
            size="massive"
            onClick={props.closeRefund}>
                OK!
            </Button>
            
        </div>
        )
    }
	
	else {
		return (
		<div>
		</div>
	);
	}
};

export default RefundDialogComponent;
