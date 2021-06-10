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
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [secondChartData, setSecondchartData] = React.useState("data2");
  const [warningChartData, setWarningchartData] = React.useState("data3");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Fire Detected</b> - at 739A Bedok Reservoir Rd, Singapore 471739
          </div>
        </div>
      ),
      type: "warning",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 4,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  const runwayNotify = (place) => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Thermal Runway</b> - at 739A Bedok Reservoir Rd, Singapore 471739
          </div>
        </div>
      ),
      type: "danger",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 4,
    };
    notificationAlertRef.current.notificationAlert(options);
  }

  useEffect(() => {
    const fireAlert = setTimeout(() => {
      // After 5 seconds set the show value to false
      notify("tr")
    }, 5000)

    const runwayAlert = setTimeout(() => {
      // After 3 seconds set the show value to false
      runwayNotify("tr")
    }, 10000)

    return () => {
      clearTimeout(fireAlert)
      clearTimeout(runwayAlert)
    }
  }, []);

  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">MQ-2 Gas Sensor</h5>
                    <CardTitle tag="h2">Gas Level (CH4) / %</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        {new Date().toISOString().split('T')[0]}
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options_3}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">TMP36 Temperature Sensor</h5>
                    <CardTitle tag="h2">Temperature / °C</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: secondChartData === "data2",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setSecondchartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        {new Date().toISOString().split('T')[0]}
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[secondChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Summary</h5>
                    <CardTitle tag="h2">Warning Level</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: warningChartData === "data3",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setWarningchartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        {new Date().toISOString().split('T')[0]}
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[warningChartData]}
                    options={chartExample1.options_2}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
