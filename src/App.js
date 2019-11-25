import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: null,
  }

  componentDidMount(){
    fetch('http://localhost:3002/pizzas')
      .then( res => res.json())
      .then( x => this.setState({ pizzas: x }) )
  }

  // changePizza = (pizza) => {
  //   this.setState({
  //     selectedPizza: pizza
  //   })
  // }

  updatePizzaList = () => {
    this.setState({
      pizzas: this.state.pizzas.map( pizza => {
        if(pizza.id == this.state.selectedPizza.id){
          return this.state.selectedPizza
        } else {
          return pizza
        }
      })
    })
    fetch(`http://localhost:3002/pizzas/${this.state.selectedPizza.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.selectedPizza)
    })
  }

    // this.setState({
    //   things: this.state.things.map( thing => {
    //     if(thing.id == targetThing.id){
    //       return // Updated Thing
    //     } else {
    //       return thing
    //     }
    //   })
    // })

  masterPizza = (pizza) => {
    this.setState({     
      selectedPizza: pizza,
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          selectedPizza={this.state.selectedPizza}
          masterPizza={this.masterPizza}
          updatePizzaList={this.updatePizzaList}
        />
        <PizzaList 
          pizzas={this.state.pizzas}
          masterPizza={this.masterPizza}
        />
      </Fragment>
    );
  }
}

export default App;
