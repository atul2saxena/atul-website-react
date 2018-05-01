import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../css/960_12_col.css';

//Import Components
import Nav from '../Nav/Nav';
/*
import Bio from '../Bio/Bio';
import Ramblings from '../Ramblings/Ramblings';
import Quotes from '../Quotes/Quotes';
import Health from '../Health/Health';
import Stocks from '../Stocks/Stocks';
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Bio',
          route: '../Bio/Bio.js'
        },
        {
          name: 'Ramblings',
          route: '../Ramblings/Ramblings.js'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container_12 clearfix">
  			<div id="header" className="grid_12">
  				<h1>Atul Saxena</h1>

          //Navigation Bar
          //Will include selected item
          <Nav navItems = {this.state.navItems}/>
  			</div>


  			<footer className="grid_8">
  				<p>&copy; 2018, WWSaxenaD Productions</p>
  			</footer>

  		</div>//.container12
  	//<script src="js/jquery-3.2.1.min.js"></script>
  	//<script src="js/application.js"></script>
    );
  }
}

export default App;
