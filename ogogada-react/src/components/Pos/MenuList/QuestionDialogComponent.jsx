import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'
import "../../../stylesheets/GifticonDialogComponent.css";
import metaJSON from "../../../assets/meta.js";



const QuestionDialogComponent = props => {
    var question = metaJSON.questions[props.level-1];

    console.log ("questionDialogComponent ", props.isConfirmed);
    props.openQuestion;
    if (!props.isConfirmed){
        return (
            <div class="gifticon-container">
            		<div class="gifticon-code">
                    {question}

					</div>
                    <div class="gifticon-buttons">
                        <Button
                        className="gifticon-dialog__button"
                        style={{ marginLeft: "50px", marginRight: "10px" }}
                        variant="contained"
                        color="primary"
                        size="massive"
                        onClick={props.confirm}>
                        Got it!
                        </Button>
                    </div>

            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default QuestionDialogComponent;