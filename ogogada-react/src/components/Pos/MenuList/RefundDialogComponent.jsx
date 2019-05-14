import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { List, Button } from 'semantic-ui-react'
import "../../../stylesheets/GifticonDialogComponent.css"

const RefundDialogComponent = props => {
    //console.log("refunddialogcomponent ", props);
	if (props.open == true && props.isConfirmed == false) {
        return (
        <div class="gifticon-container">
            <div class="gifticon-title">
                Orders List
            </div>
            <div class="refund-code">
                <List divided inverted relaxed>
                    <List.Item onClick={props.selectRefund}>
                        <List.Content>
                            <List.Header>Americano HOT 1, Americano COLD 1, ... </List.Header>
                                2970₩
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Caffe Latte HOT 2, Caffe Mocha HOT 1, ... </List.Header>
                                7300₩
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Americano HOT 1, Americano COLD 1, ... </List.Header>
                                2970₩
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Americano ICE Gifticon, Caffe Latte ICE 1, ... </List.Header>
                                500₩
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Americano HOT 2, Americano COLD 1, ... </List.Header>
                                4320₩
                        </List.Content>
                    </List.Item>
                </List>
            </div>
            <div class="refund-buttons">
                <Button
                className="gifticon-dialog__button"
                disabled={props.refundIdx == -1}
                // style={{ marginLeft: "50px", marginRight: "10px" }}
                variant="contained"
                color="primary"
                size="massive"
                onClick={props.confirm }>
                    Refund
                </Button>
                <Button
                className="gifticon-dialog__button"
                // style={{ marginLeft: "10px", marginRight: "50px" }}
                variant="contained"
                color="secondary"
                size="massive"
                onClick={props.closeRefund}>
                    Cancel
                </Button>
            </div>

            
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
                The order is now refunded!
            </div>
            <div class="refund-ok-buttons">
            <Button
            className="gifticon-dialog__button"
            // style={{ marginLeft: "50px", marginRight: "50px" }}
            variant="contained"
            color="secondary"
            size="massive"
            onClick={props.closeRefund}>
                OK!
            </Button>
            </div>
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
