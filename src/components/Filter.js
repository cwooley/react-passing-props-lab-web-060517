import React from 'react';

const Filter = (props) => {

  Filter.defaultProps={
    filters: [],
    handleChange: ()=>{console.log('why is this lab making me make these default props???')}
  }

  let handleChange = (event) => {
    console.log('in filter')
    props.handleChange(event)
  }

  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}
export default Filter;
