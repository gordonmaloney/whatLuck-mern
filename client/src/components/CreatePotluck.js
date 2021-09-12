import React, { useState } from "react";
import { TextField, Button, Typography, FormControl, FormGroup } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import SnackbarComponent from './Snackbar'

import ChipInput from "material-ui-chip-input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { createPotluck } from "../actions/potlucks";
import randomWords from "random-words";
import { Card, CardHeader, CardBody } from "reactstrap";


const CreatePotluck = ({showSnackbar}) => {
  const potlucks = useSelector((state) => state.potlucks);

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

  const [posted, setPosted] = useState(false)

  //ensure idCode is unique
  if (potlucks.map(potluck => potluck.idCode).includes(potluckData.idCode)) {
    potluckData.idCode = randomWords(4).join("-")
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setPosted(true)
    e.preventDefault();
    dispatch(createPotluck(potluckData));

    //reset form
    setPotluckData({ ...potluckData, potluckHost: "", potluckTitle: "", potluckTheme: "", essentials: [], private: false, errMessHost: false, errMessTitle: false })


    console.log(
      `success! click here to see your potluck: http://localhost:3000/potlucks/${potluckData.idCode}`
    );

    
    //window.location.href = `/potlucks/${potluckData.idCode}`
    handleRedirect(potluckData.idCode);


  };

  const showSnackbarFunction = () => {
    showSnackbar()
  }

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
    setPotluckData({ ...potluckData, private: event.target.checked });
    console.log(event.target.checked)
  };

  const handleRedirect = (url) =>
    setTimeout(function () {
      history.push(`/potlucks/${url}/potluckcreated`);
    }, 500);


    if (posted === true) {
      return     <center><CircularProgress /></center>

    } else {
  return (
    <>
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
            //value={potluckData.essentials}
            clearInputValueOnChange="true"
            newChipKeys={["Enter", ",", "."]}
            blurBehavior="add"
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
              potluckData.potluckHost === "" ? setPotluckData({ ...potluckData, errMessHost: true}) : potluckData.potluckTitle === "" ? setPotluckData({ ...potluckData, errMessTitle: true }) : <></>
            }
          >
            Submit
          </Button>
          }




        </form>
      </CardBody>
    </Card>

</>
  );
        }
};

export default CreatePotluck;
