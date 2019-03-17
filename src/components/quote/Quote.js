import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Quote({ quote, characterName, characterImage, fetch, loading }) {
  return (
    <>
      {loading ? <p>Loading</p> :
        <div>
          <p>{quote}</p>
          <p>{characterName}</p>
          <p>{characterImage}</p>
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
