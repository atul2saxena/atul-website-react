import React, { Component } from 'react';

import './App.css';
import '../css/960_12_col.css';
import logo from './logo.svg';

//Import Components
import Nav from '../Nav/Nav';
import Bio from '../Bio/Bio';
import Ramblings from '../Ramblings/Ramblings';
import Quotes from '../Quotes/Quotes';
import Health from '../Health/Health';
import Stocks from '../Stocks/Stocks';

import AlphaVantage from '../util/AlphaVantage.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Bio',
          componentToRender: Bio
        },
        {
          name: 'Ramblings',
          componentToRender: Ramblings
        },
        {
          name: 'Quotes',
          componentToRender: Quotes
        },
        {
          name: 'Health',
          componentToRender: Health
        },
        {
          name: 'Stocks',
          componentToRender: Stocks
        }
      ],
      stockList: []
    }

    this.searchStocks = this.searchStocks.bind(this);
  }

  //Need to figure out how to pass this only to the Stocks Component
  searchStocks() {
    //console.log(`Searching... ${term}, ${location}, ${sortBy}`);
    //console.log(Yelp.search('food',91301, 'best_match'));
    console.log('test1');
    const stockInfo = AlphaVantage.search();
    console.log('test2');

    this.state.stockList.push(stockInfo);
    console.log(this.state.stockList);

    /*.then(stocks => {
      //console.log(businesses);
      //console.log(this);
      this.setState ({
        stocks: stocks
      });
    });
    */
  }

  render() {
    const navOnClick = route => {
      const navItem = this.state.navItems.find(val => {
        return val.name === route
      });

      this.setState({
        selectedNav: navItem.name
      });
    };

    const selectedNavItem = this.state.navItems.find(val => {
      return val.name === this.state.selectedNav
    });
    let Component = Bio;
    if (selectedNavItem) {
      Component = selectedNavItem.componentToRender;
    }

    return (
      <div className="container_12 clearfix">
  			<div id="header" className="grid_12">
  				<h1>Atul Saxena</h1>
        </div>

        <Nav navItems={this.state.navItems} onClick={navOnClick}/>
        <Component className="main-content"/>

        {this.searchStocks()}
        1234
        {this.state.stockList.map(stocks => {
          return stocks[1];
        })
        }
        1234

  			<footer className="grid_12">
  				<p>&copy; 2018, WWSaxenaD Productions</p>
  			</footer>

  		</div>
    );
  }
}

export default App;
