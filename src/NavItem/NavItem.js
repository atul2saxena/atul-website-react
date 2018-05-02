import React from 'react';
//import './NavItem.css';

class NavItem extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="NavItem">
        <a onClick={() => this.props.onClick(this.props.name)}>{this.props.name}</a>
      </div>
    );
  }
}

export default NavItem;
