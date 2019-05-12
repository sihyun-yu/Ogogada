import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "./GifticonDialogComponent.css"

const GifticonDialogComponent = props => {
	if (props.open) {
		return (
			<div class="gifticon-container">
				<div class="gifticon-title">
				Insert Gifticon Code
				</div>
				<div class="gifticon-display">
				{props.display}
				</div>
				<div class="gifticon-submit">
				<Button
          		className="gifticon-dialog__button"
          		variant="contained"
          		color="primary"
          		size="massive">
          		Submit
        		</Button>
        		</div>
			</div>
		);
	}
	else {
		return (
		<div>
		</div>
	);
	}
};

export default GifticonDialogComponent;
