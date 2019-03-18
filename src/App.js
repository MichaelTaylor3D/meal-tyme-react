import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as Pages from './pages';

import ObserverComponent from './lib/components/ObserverComponent';
import IndeterminateProgressOverlay from './lib/components/IndeterminateProgressOverlay';
import GlobalMsg from './lib/components/GlobalMsg';

import AppActions from './actions';
import AppStore from './store';

import './App.scss';

class App extends ObserverComponent {
  constructor(props) {
    super(props);

    AppActions.getAppFeed();
  }

  render() {
    const showProgressOverlay = AppStore.shouldShowGlobalProgress();
    return (
      <Router>
        <div className="App">
          {showProgressOverlay && <IndeterminateProgressOverlay />}
          <GlobalMsg message={AppStore.getGlobalMsg()} />
          <Route exact path="/" component={Pages.Home} />
        </div>
      </Router>
    );
  }
}

export default App;
