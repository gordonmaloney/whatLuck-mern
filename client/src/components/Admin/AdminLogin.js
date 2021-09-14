import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";
import AdminPotluckList from "./PotluckList";

const AdminLogin = () => {
  const history = useHistory();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [logedIn, setLogedIn] = useState(false);

  const [incorrect, setIncorrect] = useState(false);

  const handleLogin = () => {
    console.log(loginDetails);
    if (loginDetails.username === "admin" && loginDetails.password === "123") {
      console.log("Success!");
      setLogedIn(true);
      setIncorrect(false)
    } else {
      console.log("Incorrect username and/or password!!");
      setIncorrect(true)
    }
    setLoginDetails({ username: "", password: "" });


  };

  return (
    <>
      {logedIn === false ? (
        <>
          <center>
            <h3 style={{ marginTop: "75px" }}>You must log in to view the admin dashboard</h3>
          </center>

          <Card  className="create-potluck-card" style={{ marginTop: "75px", width: "75%", marginLeft: "auto", marginRight: "auto" }}>
            <CardHeader>
              <h1><center>Log in</center></h1>
            </CardHeader>
            <CardBody>
              <form
                autoComplete="off"
                noValidate
                onSubmit={() => handleLogin()}
              >
                <TextField
                  placeholder="Username"
                  value={loginDetails.username}
                  fullWidth
                  className="formInput"
                  margin="normal"
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      username: e.target.value,
                    })
                  }
                />
                <TextField
                  placeholder="Password"
                  className="formInput"
                  fullWidth
                  margin="normal"
                  value={loginDetails.password}
                  type="password"
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    })
                  }
                />

                <Button
                  title="login"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{marginTop: "20px", marginBottom: "10px"}}
                  onClick={() => handleLogin()}
                >
                  Log in
                </Button>
                {incorrect ? <h6 className="errMess">Incorrect username and/or password.</h6> : ""}

              </form>
            </CardBody>
          </Card>

        </>
      ) : (
        <>
          <AdminPotluckList />
        </>
      )}
    </>
  );
};

export default AdminLogin;
