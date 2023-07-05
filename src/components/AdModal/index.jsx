import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const AdModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("cierrateee");
    setOpen(false);
  };

  const body = (
    <div className={classes.wrapper} onClick={handleClose}>
      <div className={classes.paper}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/SummerCampTeatreritos.png?alt=media&token=1963141b-8fe8-4609-b82e-e23a0784040f"
          alt=""
          className={classes.adHorizontal}
        />
        <img
          className={classes.adVertical}
          src="https://firebasestorage.googleapis.com/v0/b/teatreritos-b8e2b.appspot.com/o/SummerTeatreritos.png?alt=media&token=04065fcd-8653-4550-9776-c37069f80c41"
          alt=""
        />
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "@media (max-width: 600px)": {
      width: "80%",
    },
  },
  adHorizontal: {
    display: "block",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  adVertical: {
    display: "block",
    width: "100%",
    "@media (min-width: 600px)": {
      display: "none",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
}));

export default AdModal;
