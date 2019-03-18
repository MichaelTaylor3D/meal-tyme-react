import React from 'react';
import PropTypes from 'prop-types';

const AppBar = (props) => {
  const {
    useDrawer,
    left,
    middle,
    right,
  } = props;

  return (
    <div className={`app-bar ${useDrawer && 'app-bar--drawer'}`}>
      <div className="app-bar__left">{left}</div>
      <div className="app-bar__middle">{middle}</div>
      <div className="app-bar__right">{right}</div>
    </div>
  );
};

AppBar.defaultProps = {
  useDrawer: false,
};

AppBar.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
  useDrawer: PropTypes.bool,
};

export default AppBar;
