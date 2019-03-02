import React, { Component } from 'react';
import './App.css';
import ComputerListContainer from './components/ComputerListContainer'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  state =[]

  modelList =() => {
    let list =[];
    for(let models in data){
      const model = data[models]
      list.push(<option key={models} value={models}> {`${models} (${model.year})`}</option>)
    }
    return list
  }

  updateSelection = () => {

  }

  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    
  }

  render() {
    return (
      <div className="App">
        <ComputerListContainer />
        <select value = {this.state.value} onChange= {this.handleChange}>
          <option key='0' value= 'list'>-- pick a model --</option>
          {this.modelList()}
        </select>
        
      </div>
    );
  }
}

export default App;
