import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';
import styles from './Quote.css';

function Quote({ quote, characterName, characterImage, fetch, loading }) {
  return (
    <>
      {loading ? <p>Loading</p> :
        <div className={styles.Quote}>
          <h1>Simpsons Quote of the Day</h1>
          <p>{quote}</p>
          <p>{characterName}</p>
          <img src={characterImage}/>
          <Load fetch={fetch}/>
        </div>}
  </>
  );  
}
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Quote;
