import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuote } from '../../action/simpsons';
import Quote from '../../components/quote/Quote';
import { getQuote, getCharacterName, getCharacterImage } from '../../selector/simpsons';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log('FETCHHH', fetch);
    this.props.fetch();
  }
  render() {
    console.log('THIISS', this.props);
    return (
      <Quote {...this.props} />
    );
  }
}
const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
