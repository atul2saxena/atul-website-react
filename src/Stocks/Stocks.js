import React from 'react';
import './Stocks.css';
//import '../css/960_12_col.css';

class Stocks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stocks: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchStock();
    event.preventDefault();
  }

  render () {
    //console.log(this.searchStocks);
    return (
      <div className="container grid_12">
        <h2  className="article grid_8">My Stocks</h2>
        
      </div>
    );
  }
}

export default Stocks;
