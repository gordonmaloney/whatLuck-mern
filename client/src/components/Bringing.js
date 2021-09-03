import React, { useState, Component } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { updatePotluck } from '../actions/potlucks'


const Bringing = ({ potluck }) => {
  const [bringerData, setBringerData] = useState({ bringer: "", bringing: "" });
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault()
        potluck.replies = [ ...potluck.replies, bringerData.bringing ]

        console.log(potluck)

        dispatch(updatePotluck(potluck._id, potluck));
  };


  return (
      <form autoComplete="off" noValidate onSubmit={handleSubmit} >
      <Typography variant="h6">What are you bringing?</Typography>
      <TextField name="bringer" variant="outlined" label="Bringer" fullWidth value={bringerData.bringer} onChange={(e) => setBringerData({ ...bringerData, bringer: e.target.value }) } />
      <TextField name="bringing" variant="outlined" label="Bringing (coma separated)" fullWidth value={bringerData.bringing} onChange={(e) => setBringerData({ ...bringerData, bringing: e.target.value.split(',') })} />
      <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button> 
    </form>
  )

};

export default Bringing