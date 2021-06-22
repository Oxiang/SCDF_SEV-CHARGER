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
import React, { useState } from "react";
// react plugin for creating notifications over the dashboard
import VideoLooper from "react-video-looper"
// import sampleVideo from "../assets/video/car-video.mp4"
import rgb_feed from "../assets/video/rbg_cam.mp4"
import thermal_feed from "../assets/video/thermal_cam.mp4"

// reactstrap components
import {
  Row,
  Col,
  ButtonToggle,
} from "reactstrap";

function Notifications() {

  const [feed, SetFeed] = useState(true)
  
  const changeFeed = () => {
    SetFeed(!feed)
  }


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <ButtonToggle
              onClick={() => changeFeed()}
              color="info"
              size="lg"
              block
            >
              Change Feed
            </ButtonToggle>
          </Col>
        </Row>
        <Row>
          
            {/* <VideoLooper source={sampleVideo} start={0.00} end={10.00}/> */}
          {feed ?
            <Col md="12">
              <VideoLooper key={feed} source={rgb_feed} start={0.00} end={43.00} />
            </Col>  
              :
            <Col md="12">
              <VideoLooper key={feed} source={thermal_feed} start={0.00} end={43.00}/>
            </Col>
            }
          
        </Row>
      </div>
    </>
  );
}

export default Notifications;
