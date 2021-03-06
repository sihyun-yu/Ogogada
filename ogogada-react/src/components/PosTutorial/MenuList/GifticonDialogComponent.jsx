import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'
import "../../../stylesheets/GifticonDialogComponent.css";

const GifticonDialogComponent = props => {
	if (props.open == true) {
		if (props.tryAgain == true) {
			return (
				<div class="gifticon-container">
					<div class="gifticon-title">
					Insert Gifticon Code
					</div>
					<div class="gifticon-code">
					User Code: 1234-5678-0101
					</div>
					<div class="gifticon-warning">
					Wrong Code. Try Again!
					</div>
					<div class="gifticon-display">
					{props.display}
					</div>
					<div class="gifticon-buttons">
					<Button
	          		className="gifticon-dialog__button"
	          		disabled={props.cnt != 12}
	          		style={{ marginLeft: "50px", marginRight: "10px" }}
	          		variant="contained"
	          		color="primary"
	          		size="massive"
	          		onClick={props.checkGifticonCode}>
	          		Submit
	        		</Button>
	        	    <Button
			          className="gifticon-dialog__button"
			          style={{ marginLeft: "10px", marginRight: "50px" }}
			          variant="contained"
			          color="secondary"
			          size="massive"
			          onClick={props.closeGifticon}>
		          Cancel
	    	    	</Button>
	    	    </div>
			</div>
			);
		}
		else {
			return (
				<div class="gifticon-container">
					<div class="gifticon-title">
					Insert Gifticon Code
					</div>
					<div class="gifticon-code">
					User Code: 1234-5678-0101
					</div>
					<div class="gifticon-warning">
					Enter The Code 
					</div>
					<div class="gifticon-display">
					{props.display}
					</div>
					<div class="gifticon-buttons">
					<Button
	          		className="gifticon-dialog__button"
	          		disabled={props.cnt != 12}
	          		style={{ marginLeft: "50px", marginRight: "10px" }}
	          		variant="contained"
	          		color="primary"
	          		size="massive"
	          		onClick={() => {
	          			props.checkGifticonCode();
	          			props.historyCheck(props.level, 'giftsubmit', 0);
	          		}
	          		}>
	          		Submit
	        		</Button>
	        	    <Button
			          className="gifticon-dialog__button"
			          style={{ marginLeft: "10px", marginRight: "50px" }}
			          variant="contained"
			          color="secondary"
			          size="massive"
			          onClick={props.closeGifticon}>
		          Cancel
	    	    	</Button>
	    	    </div>
			</div>
			);			
		}
	}
	else {
		return (
		<div>
		</div>
	);
	}
};

export default GifticonDialogComponent;
