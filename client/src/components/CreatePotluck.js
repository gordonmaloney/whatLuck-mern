import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { createPotluck } from "../actions/potlucks";
import randomWords from 'random-words'

const CreatePotluck = () => {
  const [potluckData, setPotluckData] = useState({
    potluckHost: "",
    potluckTitle: "",
    potluckTheme: "",
    essentials: "",
    idCode: randomWords(3).join('-')
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPotluck(potluckData));
    console.log(`success! click here to see your potluck: http://localhost:3000/potlucks/${potluckData.idCode}`)
    window.location.href = `/potlucks/${potluckData.idCode}`
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Potluck</Typography>
        <TextField
          name="host"
          variant="outlined"
          label="Potluck Host"
          fullWidth
          value={potluckData.potluckHost}
          onChange={(e) =>
            setPotluckData({ ...potluckData, potluckHost: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Potluck Title"
          fullWidth
          value={potluckData.potluckTitle}
          onChange={(e) =>
            setPotluckData({ ...potluckData, potluckTitle: e.target.value })
          }
        />
        <TextField
          name="theme"
          variant="outlined"
          label="Potluck Theme"
          fullWidth
          value={potluckData.potluckTheme}
          onChange={(e) =>
            setPotluckData({ ...potluckData, potluckTheme: e.target.value })
          }
        />
        <TextField
          name="essentials"
          variant="outlined"
          label="Essentials (coma separated)"
          fullWidth
          value={potluckData.essentials}
          onChange={(e) =>
            setPotluckData({
              ...potluckData,
              essentials: e.target.value.split(","),
            })
          }
        />
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
    </Paper>
  );
};

export default CreatePotluck;
