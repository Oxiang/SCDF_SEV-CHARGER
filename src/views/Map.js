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
import React, { Component } from "react";

// reactstrap components
import {Map, InfoWindow, Marker, GoogleApiWrapper, Circle} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        onClick={this.onMapClicked}
        initialCenter={
          {
            lat: 1.33652,
            lng: 103.92203
          }
        }
      >
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'739A Bedok Reservoir Rd, Singapore 471739 - BLUESG Charging Station'}
        onClick={this.onMarkerClick}
        position={{ lat: 1.33652, lng: 103.92203 }} />
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3 style={{color: "black"}}>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>
        
        <Circle
          radius={1200}
          center={{ lat: 1.33652, lng: 103.92203 }}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY || ""
})(MapContainer);
