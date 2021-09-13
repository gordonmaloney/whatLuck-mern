import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import Bringing from "./Bringing";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import { Tooltip } from "@material-ui/core";
import SnackbarComponent from "./Snackbar";
import { ClickAwayListener } from "@material-ui/core";
import Fade from '@material-ui/core/Fade';

const PotluckStandalone = (props) => {
  const potlucks = useSelector((state) => state.potlucks);
  const potluck = potlucks.find(
    ({ idCode }) => idCode === props.match.params.idCode
  );

  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  const handleCopyclick = () => {
    navigator.clipboard.writeText(
      `http://whatluck.netlify.app/potlucks/${potluck.idCode}`
    )
    setTooltipOpen(true);
  }

  const Reply = () => {
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
      {window.location.href.indexOf("potluckcreated") > -1 ? (
        <SnackbarComponent message="Potluck created!" show={true} />
      ) : (
        <></>
      )}

      <Card className="potluck-card">
        <CardHeader>
          <h1>{potluck.potluckTitle}</h1>
        </CardHeader>
        <CardBody className="potluck-card-body">
          <p>
            <em>
              Your unique potluck id is:{" "}
              <Link to={potluck.idCode}>{potluck.idCode}</Link>
            </em>{" "}


            <ClickAwayListener onClickAway={handleTooltipClose}>

            <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={tooltipOpen}
                title="Link copied!"
                
                
                TransitionComponent={Fade} TransitionProps={{ timeout: { enter: 50, exit: 1000} }}
              >

            <Button
              className="copyLinkBtn"
              size="sm"
              onClick={() => handleCopyclick()}
            >
              Copy Link
            </Button>

            </Tooltip>

            </ClickAwayListener>


          </p>

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
      <Bringing potluck={potluck} />
    </>
  );
};

export default PotluckStandalone;
