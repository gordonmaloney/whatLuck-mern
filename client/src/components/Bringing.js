import React, { useState, Component } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updatePotluck } from "../actions/potlucks";
import { Card, CardBody, CardHeader } from "reactstrap";
import ChipInput from "material-ui-chip-input";

const Bringing = ({ potluck }) => {
  const [bringerData, setBringerData] = useState({ bringer: "", bringing: "", errMessBringer: false, errMessBringing: false});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    potluck.replies = [...potluck.replies, bringerData];

    console.log(potluck);

    dispatch(updatePotluck(potluck._id, potluck));

    //reset form
    setBringerData({ bringer: "", bringing: [], errMessBringer: false, errMessBringing: false})
  };

  return (
    <Card className="bringing-reply-card">
      <CardHeader>
        <Typography variant="h6">What are you bringing?</Typography>
      </CardHeader>
      <CardBody>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField
          required
            name="bringer"
            label="Bringer"
            fullWidth
            value={bringerData.bringer}
            onChange={(e) =>
              setBringerData({ ...bringerData, bringer: e.target.value, errMessBringer: false })
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
            value={bringerData.bringing}
            label="Bringing"
            clearInputValueOnChange="true"
            onChange={(e) => setBringerData({ ...bringerData, bringing: e, errMessBringing: false })}
          />
          
          <br />
          <br />


          {bringerData.errMessBringer === true || bringerData.errMessBringing === true ?
  <p className="errMess"><em>You must enter your name and say what you're bringing!</em></p>
  :
  <></>
        }


          {bringerData.bringer !== "" && bringerData.bringing !== "" ?
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          : 
          <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={(e) =>
            bringerData.bringer === "" ? setBringerData({ ...bringerData, errMessBringer: true}) : bringerData.bringing === "" ? setBringerData({ ...bringerData, errMessBringing: true}) : <></>
          }
        >
          Submit
        </Button>
}
        </form>
      </CardBody>
    </Card>
  );
};

export default Bringing;
