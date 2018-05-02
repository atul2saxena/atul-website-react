import React from 'react';
import './Nav.css';

import NavItem from '../NavItem/NavItem';

class Nav extends React.Component {

  render () {

    return (
      <div className="Nav">
        <nav id="nav">
          <ul>
            {
              this.props.navItems.map(nav => {
                return <NavItem name={nav.name} onClick={this.props.onClick} />
              })
            }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
