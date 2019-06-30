import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const sushiLimit = 4
const API = `http://localhost:3000/sushis?_limit=${sushiLimit}&_page=`

class App extends Component {

  state = {
    page: 1,
    wallet: 100,
    sushis: [],
    eaten: []
  }

  fetchSushi = () => {
    fetch(API+this.state.page)
    .then(res => res.json())
    .then(res => this.setState({
      page: this.state.page + 1,
      sushis: res
    }))
  }

  componentDidMount() {
    this.fetchSushi()
  }

  eatSushi = (sushi) => {
    if(sushi.price <= this.state.wallet) {
      this.setState({
        wallet: this.state.wallet - sushi.price,
        eaten: [...this.state.eaten, sushi.id]
      })
    } 
    else {
       alert("You can't afford that sushi!")
    }
  }

  moreSushi = () => {
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          moreSushi={this.moreSushi} 
          eatSushi={this.eatSushi} 
          sushis={this.state.sushis} 
          eaten={this.state.eaten}
        />
        <Table 
          wallet={this.state.wallet} 
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;