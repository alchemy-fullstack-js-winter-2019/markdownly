import React, { PureComponent } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import store from '../../store';
import { getMarkdown } from '../../selectors/selectMarkdown'; 
import { updateMarkdown } from '../../actions/actionUpdateMarkdown';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there',
    unsubscribe: null
  };

  updateState = () => {
    const currentMarkdown = store.getState();
    const markdown = getMarkdown(currentMarkdown);
    this.setState({ markdown });
  };

  updateMarkdown = ({ target }) => {
    store.dispatch(updateMarkdown(target.value));
  };

  componentDidMount() { 
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }
  
  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
