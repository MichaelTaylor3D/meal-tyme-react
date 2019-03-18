import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListingDetails from '../../ListingDetails';

const ListingDrawer = ({ clearSelectedListing, listing }) => {
  const shouldOpen = Boolean(listing);
  const drawerStyle = {
    // use a smaller drawer for larger screens
    width: window.innerWidth > 1000 ? '500px' : '95%',
  };
  return (
    <SwipeableDrawer
      open={shouldOpen}
      onClose={clearSelectedListing}
      onOpen={_.noop /* Only open on listing click */}
      PaperProps={{ style: drawerStyle }}
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
