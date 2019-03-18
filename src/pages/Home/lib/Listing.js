import React from 'react';
import PropTypes from 'prop-types';

import gradient from '../../../resources/cellGradientBackground@2x.png';

const Listing = (props) => {
  const { listing, selectListing } = props;
  const { name, category, backgroundImageURL } = listing;
  return (
    <li
      className="listings__item"
      role="presentation"
      onClick={() => selectListing(listing)}
    >

      <img
        className="listings__item__background"
        src={backgroundImageURL}
        title={name}
        alt={name}
      />

      <img
        className="listings__item__gradient"
        src={gradient}
        alt="gradient"
      />

      <div className="listings__item__info">
        <div>{name}</div>
        <div className="listings__item__info__category">{category}</div>
      </div>
    </li>
  );
};

Listing.propTypes = {
  listing: PropTypes.object.isRequired,
  selectListing: PropTypes.func.isRequired,
};

export default Listing;
