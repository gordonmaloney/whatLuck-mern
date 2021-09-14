import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Potluck = ({ potluck }) => {

  const Reply = () => {

    let replies
    potluck.replies.length > 3 ? replies = potluck.replies.slice(0,2) : replies = potluck.replies


    return (
      <>
        {replies.map((reply) => {
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
        {potluck.replies.length > 3 ?
        <Col xs="12" sm="6" md="4"><Card className="bringing-card"><CardBody><em>Open to view more...</em></CardBody></Card> </Col>
        :""}
      </>
    );
  };

  return (
    <Link className="potluckLink" to={`potlucks/${potluck.idCode}`}>
      <div className="potluck-container">
    <Card className="potluck-card" >
      <CardHeader>
        <h1>
          {potluck.potluckTitle}
        </h1>

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
    </div>
    </Link>
  );
};

export default Potluck;
