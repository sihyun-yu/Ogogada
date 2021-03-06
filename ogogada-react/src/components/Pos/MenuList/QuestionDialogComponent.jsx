import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'
import "../../../stylesheets/QuestionDialogComponent.css";
import metaJSON from "../../../assets/meta.js";



const QuestionDialogComponent = props => {
    var question = metaJSON.questions[props.level-1];

    console.log ("questionDialogComponent at stage: " + props.isConfirmed);
    console.log ("qustion:" + question);
    
    if (!props.isConfirmed){
        return (
            <div class="question-container">
            		<div class="question-code">
                        {question}
					</div>
                    <div class="quesiton-buttons">
                        <Button
                        className="question-dialog__button"
                        // style={{ marginLeft: "50px", marginRight: "10px" }}
                        variant="contained"
                        color="primary"
                        size="massive"
                        onClick={() => {
                            props.confirm();
                            props.startFlagFlip();
                        }}>
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