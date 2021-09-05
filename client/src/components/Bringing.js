import React, { useState, Component } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updatePotluck } from "../actions/potlucks";
import { Card, CardBody, CardHeader } from "reactstrap";

const Bringing = ({ potluck }) => {
  const [bringerData, setBringerData] = useState({ bringer: "", bringing: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    potluck.replies = [...potluck.replies, bringerData];

    console.log(potluck);

    dispatch(updatePotluck(potluck._id, potluck));
  };

  return (
    <Card className="bringing-reply-card">
      <CardHeader>
        <Typography variant="h6">What are you bringing?</Typography>
      </CardHeader>
      <CardBody>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          name="bringer"
          label="Bringer"
          fullWidth
          value={bringerData.bringer}
          onChange={(e) =>
            setBringerData({ ...bringerData, bringer: e.target.value })
          }
          margin="small"
        />
        <TextField
          name="bringing"
          label="Bringing (comma separated)"
          fullWidth
          value={bringerData.bringing}
          onChange={(e) =>
            setBringerData({
              ...bringerData,
              bringing: e.target.value.split(","),
            })
          }
          id="outlined-basic"
          margin="normal"
        />
        <br/><br/>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
      </CardBody>
    </Card>
  );
};

export default Bringing;
