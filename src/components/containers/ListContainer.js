import { connect } from 'react-redux';
import List from '../presentational/List';
import { getList } from '../selectors/listSelector';
import { createMarkdown } from '../actions/listAction';
import { getDocument } from '../selectors/documentSelectors';

const mapStateProps = state => ({
  list: getList(state),
  markdown: getDocument(state) });

const mapDispatchProps = (dispatch) => ({
  onClick(markdown, event) {
    event.preventDefault();
    dispatch(createMarkdown(markdown));
  }
});

const ListContainer = connect(
  mapStateProps,
  mapDispatchProps
)(List);

export default ListContainer;
