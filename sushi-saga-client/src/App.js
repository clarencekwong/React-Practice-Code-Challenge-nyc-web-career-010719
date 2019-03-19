import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    foursushi: [],
    money: 100,
    clicked: false,
    plates: [],
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => this.setState({sushis}, () => {
      this.grabFourSushis()
    }))
  }

  grabFourSushis = () => {
    let prevStateSushi = this.state.sushis
    let firstFour;
    if (prevStateSushi.length === 0) {
      this.fetchSushi()
      firstFour = this.state.sushis.splice(0,4)
      let updatedState = this.state.sushis
      this.setState({
        sushis: updatedState,
        foursushi: firstFour
      })
    } else {
      firstFour = this.state.sushis.splice(0,4)
      this.setState({
        sushis: prevStateSushi,
        foursushi: firstFour
      })
    }
  }

  handleClick = () => {
    console.log('firing')
    this.grabFourSushis()
  }

  updateMoney = (price) => {
    this.setState({money: this.state.money - price})
  }

  updatePlates = (sushi) => {
    this.setState({plates: [...this.state.plates, sushi]})
  }

  addMoney = (amount) => {
    this.setState({money: this.state.money + amount})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.foursushi}
          grabFourSushis={this.grabFourSushis}
          handleClick={this.handleClick}
          updateMoney={this.updateMoney}
          money={this.state.money}
          updatePlates={this.updatePlates}
        />
        <Table
          money={this.state.money}
          plates={this.state.plates}
        />
        <MoneyForm
          addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;
