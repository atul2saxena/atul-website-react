import React, { Component } from 'react';
import './App.css';
import '../css/960_12_col.css';

//Import Components
import Nav from '../Nav/Nav';
import Bio from '../Bio/Bio';
import Ramblings from '../Ramblings/Ramblings';
/*
import logo from './logo.svg';
import Bio from '../Bio/Bio';

import Quotes from '../Quotes/Quotes';
import Health from '../Health/Health';
import Stocks from '../Stocks/Stocks';
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNav: 'Bio',
      navItems: [
        {
          name: 'Bio',
          componentToRender: Bio
        },
        {
          name: 'Ramblings',
          componentToRender: Ramblings
        }
      ]
    }
  }

  render() {
    const navOnClick = route => {
      const navItem = this.state.navItems.find(val => val.name === route);
      this.setState({
        selectedNav: navItem.name
      });
    };

    const selectedNavItem = this.state.navItems.find(val => val.name === this.state.selectedNav);
    let Component = null;
    if (selectedNavItem) {
      Component = selectedNavItem.componentToRender;
    }

    return (
      <div className="container_12 clearfix">
  			<div id="header" className="grid_12">
  				<h1>Atul Saxena</h1>

          //Navigation Bar
          <Nav navItems={this.state.navItems} onClick={navOnClick}/>
  			</div>

        <div className="main-content">
          { Component ? <Component /> : null }
        </div>


  			<footer className="grid_8">
  				<p>&copy; 2018, WWSaxenaD Productions</p>
  			</footer>

  		</div>

    );
  }
}

export default App;
