import React from 'react';
import './Ramblings.css';
import '../css/960_12_col.css';

import Post from '../Post/Post';

class Ramblings extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_12">
          <Post />
      </div>
    );
  }
}

export default Ramblings;
