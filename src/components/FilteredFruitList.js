import React, { Component } from 'react';


const FilteredFruitList = (props) => {
    console.log(props)
    const list = !props.filter ? props.items : props.items.filter(i => i.fruit_type === props.filter);
    console.log('list', list)
    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

export default FilteredFruitList;
