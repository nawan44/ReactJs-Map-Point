import React, { Component } from 'react';
import Map from './map.js';
import '../css/style.css';


const data = [
  {
    id: 1,
    name: "Universitas Negeri jakarta",
    latitude: "-6.192928",
    longitude: "106.879529"
  },
  {
    id: 2,
    name: "Universitas Pelita Harapan",
    latitude: "-6.227151",
    longitude: "106.610110"
  },
  {
    id: 3,
    name: "Universitas Esa Unggul",
    latitude: "-6.185616",
    longitude: "106.778866"
  }
];

data[0].circle = {
  radius: 2000,
  options: {
    strokeColor: "#1e90ff"
  }
};

class Point extends Component {
render(){ 
return (<Map
    center={{ lat: -6.121435, lng:  106.774124 }}
    zoom={12}
    places={data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key="
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `800px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  /> )
}

}
export default Point;
