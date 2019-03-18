import React from 'react';
import PropTypes from 'prop-types';

const AppBar = (props) => {
  const { left, middle, right } = props;
  return (
    <div className="app-bar">
      <div className="app-bar__left">{left}</div>
      <div className="app-bar__middle">{middle}</div>
      <div className="app-bar__right">{right}</div>
    </div>
  );
};

AppBar.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
};

export default AppBar;
