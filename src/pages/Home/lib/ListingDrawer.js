import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListingDetails from '../../ListingDetails';

const drawerStyle = {
  width: '95%',
};

const ListingDrawer = ({ clearSelectedListing, listing }) => {
  const shouldOpen = Boolean(listing);

  return (
    <SwipeableDrawer
      open={shouldOpen}
      onClose={clearSelectedListing}
      onOpen={_.noop /* Only open on listing click */}
      PaperProps={{ style: drawerStyle }}
      transitionDuration={10000}
    >
      {listing && (
        <ListingDetails listing={listing} onGoBack={clearSelectedListing} />
      )}
    </SwipeableDrawer>
  );
};

ListingDrawer.propTypes = {
  listing: PropTypes.object.isRequired,
  clearSelectedListing: PropTypes.func.isRequired,
};

export default ListingDrawer;
