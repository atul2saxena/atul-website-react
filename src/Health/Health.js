import React from 'react';
import './Health.css';
//import '../css/960_12_col.css';

class Health extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_12">
        <h2  className="article grid_8">FitBit API</h2>
        <br/>
        <h2 className="article grid_8">GoogleFit API (meditation stats)</h2>
      </div>
    );
  }
}

export default Health;
