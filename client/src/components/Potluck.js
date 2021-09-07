import React, { Component } from "react";
import Bringing from "./Bringing";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deletePotluck } from "../actions/potlucks";
import { updatePotluck } from "../actions/potlucks";

const Potluck = ({ potluck }) => {
  const dispatch = useDispatch();


 


  const Reply = () => {
    const potluckParent = potluck;
    const replies = potluck.replies


    const handleDeleteReply = (potluckParent, reply, replies) => {
      potluckParent.replies = replies.filter(data => data._id !== reply._id)
  
      console.log(potluckParent);
  
      dispatch(updatePotluck(potluck._id, potluckParent));
    };


    return (
      <>
        {potluck.replies.map((reply) => {
          return (
            <Col xs="12" sm="6" md="4">
              <Card className="bringing-card">
              


                

                <CardHeader>
                  <b>{reply.bringer}</b> is bringing...
                </CardHeader>
                <CardBody>
                  {reply.bringing.map((bringItem, index) => {
                    return (
                      <>
                        {bringItem}
                        {index < reply.bringing.length - 2 ? ", " : ""}
                        {index === reply.bringing.length - 2 ? " and " : ""}
                      </>
                    );
                  })}
                </CardBody>
                {window.location.href.indexOf("admin") != -1 ? (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDeleteReply(potluckParent, reply, replies)}
                  >
                    Delete
                  </Button>
                ) : (
                  ""
                )}
              </Card>
            </Col>
          );
        })}
      </>
    );
  };

  return (
    <Card className="potluck-card">
      <CardHeader>
        <h1>
          <Link to={`potlucks/${potluck.idCode}`}>{potluck.potluckTitle}</Link>
        </h1>

        {window.location.href.indexOf("admin") != -1 ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePotluck(potluck._id))}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </CardHeader>
      <CardBody className="potluck-card-body">
        {potluck.potluckTheme ? (
          <li>
            <b>Theme: </b> {potluck.potluckTheme}{" "}
          </li>
        ) : (
          ""
        )}

        <li>
          <b>Hosted by:</b> {potluck.potluckHost}
        </li>

        {potluck.potluckTheme ? (
          <li className="mb-4">
            <b>Essentials:</b>
            {potluck.essentials.map((essential, index) => {
              return (
                <>
                  {" "}
                  {essential}
                  {index < potluck.essentials.length - 2 ? ", " : ""}
                  {index === potluck.essentials.length - 2 ? " and " : ""}
                </>
              );
            })}
          </li>
        ) : (
          <>
            <br />{" "}
          </>
        )}

        <Row>
          <Reply />
        </Row>
      </CardBody>
    </Card>
  );
};

export default Potluck;
