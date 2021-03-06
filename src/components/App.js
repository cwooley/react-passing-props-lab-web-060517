import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  handleFilterChange = event => {
    console.log('In App, new filter: ', event.target.value);
    if (event.target.value === 'all') event.target.value = null
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render () {
    return (
      <FruitBasket selectedFilter={this.state.currentFilter} filters={this.state.filters} handleChange={this.handleFilterChange} items={this.state.fruit} />
    )
  }
}

export default App;
