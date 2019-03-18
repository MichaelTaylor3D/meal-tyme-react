import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import bottleRockerTheme from './lib/themes/bottleRockerTheme';

import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(bottleRockerTheme)}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'), // eslint-disable-line no-undef
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
