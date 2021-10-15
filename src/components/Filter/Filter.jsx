import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.currentTarget.value)}
    />
  </label>
);
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
