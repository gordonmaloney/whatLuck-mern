import React, { useState, Component } from "react";
import { TextField, Button, Typography, Paper, List } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updatePotluck } from "../actions/potlucks";
import { Card, CardBody, CardHeader } from "reactstrap";
import ChipInput from 'material-ui-chip-input';
import { CircularProgress } from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Tooltip } from "@material-ui/core";

const Bringing = ({ potluck }) => {
  const [bringerData, setBringerData] = useState({
    bringer: "",
    bringing: "",
    errMessBringer: false,
    errMessBringing: false,
  });

  const [posted, setPosted] = useState(false)

  var allReplies = []
  potluck.replies.map(reply => reply.bringing.map(bring => allReplies.push(bring.toLowerCase())))
  console.log(allReplies)

  const [duplicates, setDuplicates] = useState([])

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setPosted(true)
    e.preventDefault();
    potluck.replies = [...potluck.replies, bringerData];

    dispatch(updatePotluck(potluck._id, potluck));

    //reset form
    setBringerData({
      bringer: "",
      bringing: [],
      errMessBringer: false,
      errMessBringing: false,
    });

    setSnackbarOpen(true);
  };

  const checkDuplicate = (e) => {
    let duplicatesList = []

    e.map((item) => allReplies.includes(item.toLowerCase()) ? duplicatesList.push(item.toLowerCase()) : console.log("ok"))

    const uniqueDuplicates = [...new Set(duplicatesList)]
    setDuplicates(uniqueDuplicates)
  };

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setSnackbarOpen(false);
  };

const handleChange = (e) => {
  setBringerData({
    ...bringerData,
    bringing: e,
    errMessBringing: false,
})
console.log(e)
checkDuplicate(e)
}

const handleRequestDelete = (deletedChip) => {
  setBringerData({
    bringing: bringerData.filter((c) => c !== deletedChip)
  })
}





if (posted === true) {
  return     <>
  
  <Bringing potluck={potluck}/>
  
  
  <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Reply posted!"
        style={{ color: "blue" }}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      /></>

} else {
return (
    <>
      <Card className="bringing-reply-card">
        <CardHeader>
          <Typography variant="h6">What are you bringing?</Typography>
        </CardHeader>
        <CardBody>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              name="bringer"
              label="Your name"
              fullWidth
              value={bringerData.bringer}
              onChange={(e) =>
                setBringerData({
                  ...bringerData,
                  bringer: e.target.value,
                  errMessBringer: false,
                })
              }
              margin="small"
            />

            <ChipInput
              required
              name="bringing"
              fullWidth="true"
              margin="normal"
              newChipKeys={["Enter", ",", "."]}
              blurBehavior="add"
              //value={bringerData.bringing}
              label="Bringing..."
              clearInputValueOnChange="true"
              
              onChange={(e) => handleChange(e)
              }
            />
            
            {duplicates.length > 0 ?


            <p className="errMess">Heads up! Someone is already bringing
            
            {duplicates.map((duplicate, index) => {
              return (
                <>
                {" "}
                  {duplicate}
                  {index < duplicates.length - 2 ? ", " : ""}
                  {index === duplicates.length - 2 ? " and " : ""}
                  </>
                  )}
            )}
            </p>
            
            
            : <br /> }
            

            
            <br />

            {bringerData.errMessBringer === true ||
            bringerData.errMessBringing === true ? (
              <p className="errMess">
                <em>You must enter your name and say what you're bringing!</em>
              </p>
            ) : (
              <></>
            )}

            {bringerData.bringer !== "" && bringerData.bringing !== "" ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={(e) =>
                  bringerData.bringer === "" ? (
                    setBringerData({ ...bringerData, errMessBringer: true })
                  ) : bringerData.bringing === "" ? (
                    setBringerData({ ...bringerData, errMessBringing: true })
                  ) : (
                    <></>
                  )
                }
              >
                Submit
              </Button>
            )}
          </form>
        </CardBody>
      </Card>

    </>
  );
      }
};

export default Bringing;
