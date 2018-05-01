import React from 'react';
import './Quotes.css';
//import '../css/960_12_col.css';

class Quotes extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_12">
        <h2  className="article grid_8">April 27, 2018</h2>
        <article id="bio" className="article grid_8">
          <p>Not everything that counts can be counted, and not everything that can be counted counts</p>
        </article>
        <br/>
        <h2 className="article grid_8">April 24, 2018</h2>
        <article id="bio" className="article grid_8">
          <p>Not everything that counts can be counted, and not everything that can be counted counts</p>
        </article>
      </div>
    );
  }
}

export default Quotes;
