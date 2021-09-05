import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import Bringing from "./Bringing";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

const PotluckStandalone = (props) => {
  const potlucks = useSelector((state) => state.potlucks);
  const potluck = potlucks.find(
    ({ idCode }) => idCode === props.match.params.idCode
  );

  console.log("params", props.match.params.idCode);
  console.log("potluck", potluck);

  const Reply = () => {
    return (
      <>
        {potluck.replies.map((reply) => {
          return (
            <Col xs="12" sm="6" md="4">
            <Card className="bringing-card">
              <CardHeader><b>{reply.bringer}</b> is bringing...</CardHeader>
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
            </Card>
            </Col>
          );
        })}
      </>
    );
  };

  return !potlucks.length ? (
    <CircularProgress />
  ) : (
    <>
      <h1>{potluck.potluckTitle}</h1>
      <p>
        Your unique potluck id is: <Link to={potluck.idCode}>{potluck.idCode}</Link> 
        {" "}
        <Button size="sm" onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
          Copy Link
        </Button>
      </p>
      <li>
        <b>Theme: </b> {potluck.potluckTheme}
      </li>
      <li>
        <b>Hosted by:</b> {potluck.potluckHost}
      </li>
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

        <Row>
          <Reply />
        </Row>

      <Bringing potluck={potluck} />
    </>
  );
};

export default PotluckStandalone;
