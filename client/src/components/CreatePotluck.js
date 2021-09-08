import React, { useState, useCallback } from "react";
import { TextField, Button, Typography, FormControl, FormGroup } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ChipInput from "material-ui-chip-input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { createPotluck } from "../actions/potlucks";
import randomWords from "random-words";
import { Card, CardHeader, CardBody } from "reactstrap";

const CreatePotluck = () => {
  const history = useHistory();

  const [checked, setChecked] = React.useState(false);

  const [potluckData, setPotluckData] = useState({
    potluckHost: "",
    potluckTitle: "",
    potluckTheme: "",
    essentials: [],
    idCode: randomWords(3).join("-"),
    private: false,
    errMessHost: false,
    errMessTitle: false
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

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
    setPotluckData({ ...potluckData, private: event.target.checked });
    console.log(event.target.checked)
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
          <FormControl fullWidth>
          <TextField
            name="host"
            label="Potluck Host"
            required
            fullWidth
            className="formInput"
            value={potluckData.potluckHost}
            onChange={(e) =>
              setPotluckData({ ...potluckData, potluckHost: e.target.value, errMessHost: false})
            }
            margin="small"
          />
          </FormControl>
          <TextField
            name="title"
            label="Potluck Title"
            required
            fullWidth
            className="formInput"
            value={potluckData.potluckTitle}
            onChange={(e) =>
              setPotluckData({ ...potluckData, potluckTitle: e.target.value, errMessTitle: false })
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

          <ChipInput
            name="essentials"
            fullWidth="true"
            margin="normal"
            defaultValue=""
            label="Essentials"
            onChange={(e) => setPotluckData({ ...potluckData, essentials: e })}
          />

          <FormControlLabel
           control={<Checkbox checked={potluckData.checked} onChange={handleCheckbox} name="private" />}
           label="Make private"
          />

          <br />
          <br />


{potluckData.errMessHost === true || potluckData.errMessTitle ?
  <p className="errMess"><em>You must enter a host and a title</em></p>
  :
  <></>
        }


          {potluckData.potluckHost !== "" && potluckData.potluckTitle ?
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
        : 
          <Button
          
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            margin="large"
            onClick={(e) =>
              setPotluckData({ ...potluckData, errMessHost: true, errMessTitle: true })
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

export default CreatePotluck;
