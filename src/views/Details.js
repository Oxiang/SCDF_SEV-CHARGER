/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import bmw from "../assets/img/bmw.jpg"

// reactstrap components
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
} from "reactstrap";

function Notifications() {
  return (
    <>
      <div className="content">
        <Row>
        <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Specifications</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Model</td>
                      <td>BMW 13</td>
                    </tr>
                    <tr>
                      <td>Battery Specifications: Voltage</td>
                      <td>120 V</td>
                    </tr>
                    <tr>
                      <td>Battery Specifications: Capacity</td>
                      <td>120 Ah</td>
                    </tr>
                    <tr>
                      <td>Safe Temperature</td>
                      <td>below 60 C</td>
                    </tr>
                    <tr>
                      <td>Placement</td>
                      <td>Bottom Black Plate</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12" style={{"text-align-last":"center"}}>
            <img src={bmw} alt="bmw" ></img>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
