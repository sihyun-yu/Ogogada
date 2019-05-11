import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const GifticonDialogComponent = props => {
  return (
    <Dialog open={props.open} onClose={props.handleCloseGifticon}>
      <DialogTitle>결제 확인</DialogTitle>
    </Dialog>
  );
};

export default GifticonDialogComponent;
