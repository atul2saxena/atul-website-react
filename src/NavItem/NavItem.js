import React from 'react';
//import './NavItem.css';

class NavItem extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="NavItem">
        <a href={this.props.route}>{this.props.name}</a>
      </div>
    );
  }
}

export default NavItem;
