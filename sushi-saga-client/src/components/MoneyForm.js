import React, { Component, Fragment } from 'react'

class MoneyForm extends Component {

  state = {
    amount: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(this.state.amount)
    this.setState({amount: ''})
  }

  handleChange = (e) => {
    this.setState({amount: parseInt(e.target.value)});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="amount">Money Deposit: </label>
          <input onChange={this.handleChange} type="number" value={this.state.amount} name="amount"/>
        </form>
      </div>
    )
  }
}

export default MoneyForm
