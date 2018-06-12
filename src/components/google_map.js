import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;

// ref system in react - use the 'ref' property to get direct reference to an HTML element that has been rendered to the page

// componentDidMount is a react lifecycle method that gets called automatically after this component has been rendered to the screen.
