import React from 'react';
import './Nav.css';

import NavItem from '../NavItem/NavItem';

class Nav extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="Nav">
        <nav id="nav">
          <ul>
            {
              this.props.navItems.map(nav => {
                return <NavItem name={nav.name}
                  route={nav.route}/>
              })
            }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
