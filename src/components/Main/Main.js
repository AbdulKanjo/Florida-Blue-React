import React, { Component } from "react";
import "./Main.css";
import List from "../List/List";
import Cart from "../Cart/Cart";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      cart: [],
      input: ""
    };
  }

  handleInputChange = value => {
    this.setState({ input: value });
  };

  handleAddItem = () => {
    if (
      !this.state.list.includes(this.state.input) &
      !this.state.cart.includes(this.state.input)
    ) {
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ""
      });
    } else {
      alert("Item already exists");
    }
  };

  handleAddItemToCart = e => {
    var num = this.state.list.indexOf(e);

    if (!this.state.cart.includes(e)) {
      this.setState({
        cart: [...this.state.cart, e],
        input: ""
      });
    } else {
      alert("Item already exists");
    }
    if (num > -1) {
      this.state.list.splice(num, 1);
    }
  };

  addBackToList = e => {
    var num = this.state.cart.indexOf(e);

    if (!this.state.list.includes(this.state.input)) {
      this.setState({
        list: [...this.state.list, e],
        input: ""
      });
    } else {
      alert("Item already exists in need to buy list");
    }
    if (num > -1) {
      this.state.cart.splice(num, 1);
    }
  };

  render() {
    return (
      <div className="main">
        <div>
          <input
            value={this.state.input}
            placeholder="Add New Item"
            onChange={e => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <div className="lists">
          <div className="list-to-buy">
            <h2>To buy list</h2>
            {this.state.list.length >= 1 ? (
              <List
                list={this.state.list}
                handleAddItemToCart={this.handleAddItemToCart}
              />
            ) : (
              "You don't have to spend money :)"
            )}
          </div>
          <div className="cart">
            <h2>Cart</h2>
            {this.state.cart.length >= 1 ? (
              <Cart cart={this.state.cart} addBackToList={this.addBackToList} />
            ) : (
              "Your cart is empty!"
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
