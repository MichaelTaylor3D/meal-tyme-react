import _ from 'lodash';
import React from 'react';

import ObserverComponent from '../../lib/components/ObserverComponent';

import AppBar from '../../lib/components/AppBar';
import AppStore from '../../store';

import ListingDrawer from './lib/ListingDrawer';
import Listing from './lib/Listing';

class Home extends ObserverComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedListing: null,
    };
  }

  onClearSelectedListing = () => {
    this.setState({ selectedListing: null });
  }

  onSelectListing = (listing) => {
    this.setState({ selectedListing: listing });
  }

  render() {
    const feed = AppStore.getFeed();

    if (_.isEmpty(feed)) {
      return null;
    }

    const { selectedListing } = this.state;
    const { restaurants: listings } = feed;

    return (
      <>
        <AppBar middle={<span>Lunch Tyme </span>} />
        <ul className="listings">
          {listings.map(listing => (
            <Listing
              key={`${listing.name}-${listing.category}`}
              listing={listing}
              selectListing={this.onSelectListing}
            />
          ))}
        </ul>

        <ListingDrawer
          listing={selectedListing}
          clearSelectedListing={this.onClearSelectedListing}
        />

      </>
    );
  }
}

export default Home;
