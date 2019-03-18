import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '../../lib/components/AppBar';
import backButton from '../../resources/ic_webBack@2x.png';

import AppStore from '../../store';
import MapLocation from './lib/MapLocation';
import ContactInfo from './lib/ContactInfo';
import SummaryBar from './lib/SummaryBar';

const ListingDetails = (props) => {
  const { listing, onGoBack } = props;

  const {
    category,
    contact,
    location,
    name,
  } = listing;

  const { lat, lng, formattedAddress } = location;

  return (
    <div>
      <AppBar
        left={<img src={backButton} className="app-bar__left__img" title="back" alt="back" role="presentation" onClick={onGoBack} />}
        middle="Lunch Tyme"
      />

      <MapLocation
        apiKey={AppStore.getGoogleApiKey()}
        lat={lat}
        lng={lng}
      />

      <SummaryBar
        name={name}
        category={category}
      />

      <ContactInfo
        contact={contact}
        formattedAddress={formattedAddress}
      />
    </div>
  );
};

ListingDetails.propTypes = {
  listing: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default ListingDetails;
