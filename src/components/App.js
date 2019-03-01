import React from 'react';
import DocumentContainer from './containers/DocumentContainer';
import ListContainer from './containers/ListContainer';
import styles from '../components/presentational/App.css';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <ListContainer />
      <div className={styles.image}>
        <h1 className={styles.Title}>MARKDOWN EDITOR</h1>
        <h3> TYPE OR COPY YOUR MARKDOWN FILE ON THE LEFT SIDE, 
          AND THE PDF VERSION WITH RENDER ON THE RIGHT SIDE.
        </h3>
        <DocumentContainer /> 
      </div>
    </>
  );
}
