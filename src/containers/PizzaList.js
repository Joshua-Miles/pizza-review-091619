import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    // window.pizza = <Pizza />
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map((pizza) =>
            <Pizza 
              key={pizza.id} {/* < -- For reacts benefit, not ours */...{}}
              size={pizza.size} 
              id={pizza.id}
              topping={pizza.topping}
              vegetarian={pizza.vegetarian}
              masterPizza={this.props.masterPizza}
            />
          )}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
