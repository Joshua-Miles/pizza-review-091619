import React from "react"

const PizzaForm = (props) => {
  let selectedPizza;
  if(props.selectedPizza !== null){
    selectedPizza = props.selectedPizza
  } else {
    selectedPizza = {}
  }
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={selectedPizza.topping} 
              onChange={(e) => props.masterPizza({
                ...selectedPizza,
                // vegetarian: selectedPizza.vegetarian,
                // size: selectedPizza.size
                topping: e.target.value,
              }) }
            />
        </div>
        <div className="col">
          <select 
            value={selectedPizza.size} 
            className="form-control"
            onChange={(e) => props.masterPizza({
              ...selectedPizza,
              // vegetarian: selectedPizza.vegetarian,
              // size: selectedPizza.size
              size: e.target.value,
            })}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              checked={selectedPizza.vegetarian == true}
              onClick={(e) => props.masterPizza({
                ...selectedPizza,
                // vegetarian: selectedPizza.vegetarian,
                // size: selectedPizza.size
                vegetarian: true,
              }) }
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              value="Not Vegetarian" 
              checked={selectedPizza.vegetarian == false}
              onClick={(e) => props.masterPizza({
                ...selectedPizza,
                // vegetarian: selectedPizza.vegetarian,
                // size: selectedPizza.size
                vegetarian: false,
              }) }
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
            type="submit" 
            className="btn btn-success" 
            onClick={() => props.updatePizzaList()}>
            Submit
          </button>
        </div>
      </div>

  )
}

export default PizzaForm
