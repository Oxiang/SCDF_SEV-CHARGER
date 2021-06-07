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
// react plugin for creating notifications over the dashboard
import VideoLooper from "react-video-looper"
import sampleVideo from "../assets/video/car-video.mp4"

// reactstrap components
import {
  Row,
} from "reactstrap";

function Notifications() {
  return (
    <>
      <div className="content">
        <Row>
          <VideoLooper source={sampleVideo} start={134.00} end={140.00}/>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
