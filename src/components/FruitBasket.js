import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  let handleFilterChange = event => {
    console.log('in basket')
    props.handleChange(event)
  }

  FruitBasket.defaultProps = {
    fruit: 'this',
    filters: ['lab', 'is'],
    currentFilter: 'annoying',
    updateFilterCallback: ()=>{console.log("please dont make us set these useless default parameters anymore...")}
  }

  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={props.filters} />
      <FilteredFruitList
        filter={props.selectedFilter} items={props.items}/>
    </div>
  );

}

export default FruitBasket;
