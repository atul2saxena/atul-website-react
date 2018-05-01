import React from 'react';
import './Bio.css';
//import '../css/960_12_col.css';

class Bio extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_8">
        <h2>Who Am I?</h2>

        <article id="bio" className="article grid_8">
          <p>Tao of Seneca - Practical Letters from a Stoic Master</p>
          <p><b>On Saving Time</b></p>
          <p>'Whatever years be behind us are in death's hands'</p>
          <p>Don't waste time idly.
          Nothing is ours except time, you cannot repay time</p>
        </article>
        <br/>
      </div>
    );
  }
}

export default Bio;
