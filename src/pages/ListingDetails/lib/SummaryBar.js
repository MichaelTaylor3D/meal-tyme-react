import React from 'react';
import PropTypes from 'prop-types';

const SummaryBar = (props) => {
  const { name, category } = props;
  return (
    <div className="summary-bar">
      <div>
        <div className="summary-bar__name">{name}</div>
        <div className="summary-bar__category">{category}</div>
      </div>
    </div>
  );
};

SummaryBar.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SummaryBar;
