import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, onChange }) {
  return (
    <textarea className={styles.Editor}  onChange={onChange} value={markdown}  name="markdown" />
  );
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired
};

export default Editor;
