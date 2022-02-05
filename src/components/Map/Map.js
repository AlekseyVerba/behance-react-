import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import imgMarker from "../../assets/img/pin.png"


const AnyReactComponent = ({ text }) => <div><img src={imgMarker} alt="marker" /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.2957,
      lng: 104.3054
    },
    zoom: 16,
    scrollwheel: false
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBUbbE7-A2wXldQaCUtq4bN-j-P9RpSl1U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          scrollWheel={false}
        >
          <AnyReactComponent
            lat={52.2957}
            lng={104.3054}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;