import { connect } from 'react-redux';
import Document from '../presentational/Document';
import { getDocument } from '../selectors/documentSelectors';
import { updateDocument } from '../actions/documentAction';

const mapStateToProps = state => ({
  markdown: getDocument(state)
});

const mapDispatchProps = (dispatch) => ({
  onChange({ target }) {
    const factoryCreate = {
      markdown: updateDocument
    };
    
    dispatch(factoryCreate[target.name](target.value));
  }
});

const MarkdownContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(Document);

export default MarkdownContainer;
