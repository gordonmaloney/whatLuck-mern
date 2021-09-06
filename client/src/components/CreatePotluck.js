import React, { useState, useCallback } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { createPotluck } from "../actions/potlucks";
import randomWords from "random-words";
import { Card, CardHeader, CardBody } from "reactstrap";

const CreatePotluck = () => {
  const history = useHistory();
  const Examples = [];

  const [potluckData, setPotluckData] = useState({
    potluckHost: "",
    potluckTitle: "",
    potluckTheme: "",
    essentials: [],
    idCode: randomWords(3).join("-"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPotluck(potluckData));
    console.log(
      `success! click here to see your potluck: http://localhost:3000/potlucks/${potluckData.idCode}`
    );
    //window.location.href = `/potlucks/${potluckData.idCode}`
    handleRedirect(potluckData.idCode);
  };

  const handleRedirect = (url) =>
    setTimeout(function () {
      history.push(`/potlucks/${url}`);
    }, 500);

  return (
    <Card className="create-potluck-card">
      <CardHeader>
        <Typography variant="h4" align="center">
          Create a Potluck
        </Typography>
      </CardHeader>
      <CardBody>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField
            name="host"
            label="Potluck Host"
            fullWidth
            className="formInput"
            value={potluckData.potluckHost}
            onChange={(e) =>
              setPotluckData({ ...potluckData, potluckHost: e.target.value })
            }
            margin="small"
          />
          <TextField
            name="title"
            label="Potluck Title"
            fullWidth
            className="formInput"
            value={potluckData.potluckTitle}
            onChange={(e) =>
              setPotluckData({ ...potluckData, potluckTitle: e.target.value })
            }
            margin="normal"
          />
          <TextField
            name="theme"
            label="Potluck Theme"
            fullWidth
            className="formInput"
            value={potluckData.potluckTheme}
            onChange={(e) =>
              setPotluckData({ ...potluckData, potluckTheme: e.target.value })
            }
            margin="normal"
          />

          
        <TextField
          name="essentials"
          label="Essentials (comma separated)"
          fullWidth
          onChange={(e) =>
            setPotluckData({
              ...potluckData,
              essentials: e.target.value.split(","),
            })
          }
          margin="normal"
        />
        
{/*
          <Autocomplete
            multiple
            id="tags-standard"
            options={Examples.map((option) => option.title)}
            freeSolo
            fullWidth
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="standard"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }

            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                name="Essentials"
                label="Essentials"
                margin="normal"
                placeholder="Essentials"
                value={potluckData.essentials}
                onChange={(e) =>
                  setPotluckData({
                    ...potluckData,
                    essentials: e.target.value,
                  })
                }
              />
            )}
          />
*/}

          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            margin="large"
          >
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default CreatePotluck;
