import React from 'react';
import PropTypes from 'prop-types';

function List({ list, onClick, markdown }) {
  const listOfDocs = list.map(doc=> {
    return <li key={list}>{doc}</li>;
  });
  
  return (
    <>
    <button onClick={onClick.bind(null, markdown)}>ADD</button>
      <ul>
        {listOfDocs}
      </ul>
    </>
  );
}

List.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired
};

export default List;
