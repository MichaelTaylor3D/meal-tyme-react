import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListingDetails from '../../ListingDetails';

const drawerStyle = {
  width: '100%',
};

const ListingDrawer = ({ clearSelectedListing, listing }) => {
  const shouldOpen = Boolean(listing);

  return (
    <SwipeableDrawer
      open={shouldOpen}
      onClose={clearSelectedListing}
      onOpen={_.noop /* Only open on listing click */}
      PaperProps={{ style: drawerStyle }}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={clearSelectedListing}
        onKeyDown={clearSelectedListing}
      >
        {listing && (
          <ListingDetails listing={listing} onGoBack={clearSelectedListing} />
        )}
      </div>
    </SwipeableDrawer>
  );
};

ListingDrawer.propTypes = {
  listing: PropTypes.object.isRequired,
  clearSelectedListing: PropTypes.func.isRequired,
};

export default ListingDrawer;
