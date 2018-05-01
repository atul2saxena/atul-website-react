import React from 'react';
import './Stocks.css';
//import '../css/960_12_col.css';

class Stocks extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_12">
        <h2  className="article grid_8">My Stocks</h2>
        <p>Stream info from an API</p>
      </div>
    );
  }
}

export default Stocks;
