import React, { Component, Fragment } from 'react'

class Sushi extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    if ((this.props.money > this.props.sushi.price) && !this.state.clicked) {
      this.setState({clicked: true})
      this.props.updateMoney(this.props.sushi.price)
      this.props.updatePlates(this.props.sushi)
    } else {
      null
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.handleClick}>
          {this.state.clicked ? null : <img src={this.props.sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
