// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuote } from '../../action/simpsons';
import Quote from '../../components/quote/Quote';
import { getQuote, getCharacterName, isLoading, getCharacterImage } from '../../selector/simpsons';
import { withFetch } from '../../components/WithFetch';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Quote));
