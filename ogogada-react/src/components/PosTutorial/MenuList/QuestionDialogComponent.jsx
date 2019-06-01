import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'
import "../../../stylesheets/QuestionDialogComponent.css";
import metaJSON from "../../../assets/meta.js";



const QuestionDialog2Component = props => {
    var question = metaJSON.tutorialQuestions[props.level-1];

    console.log ("questionDialogComponent at stage: " + props.isConfirmed);
    
    if (!props.isConfirmed){
        return (
            <div class="question-container">
            		<div class="question-code">
                        <div>
                        Follow the order highlighted with
                        <font color="red"> red </font>
                        border.
                        </div> 
                        <br/>
                        {question}
					</div>
                    <div class="quesiton-buttons">
                        <Button
                        className="question-dialog__button"
                        // style={{ marginLeft: "50px", marginRight: "10px" }}
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

export default QuestionDialog2Component;