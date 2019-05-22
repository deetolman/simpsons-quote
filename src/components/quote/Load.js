import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';

function Load({ fetch }) {
  return (
    <button className={styles.button} onClick={fetch}>Fetch Quote</button>
  );
}
Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;
