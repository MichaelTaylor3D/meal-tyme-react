import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

const MapLocation = (props) => {
  const {
    apiKey,
    lat,
    lng,
    zoom,
  } = props;

  return (
    <div className="map-location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <MapMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

MapLocation.defaultProps = {
  zoom: 15,
};

MapLocation.propTypes = {
  apiKey: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};

export default MapLocation;
