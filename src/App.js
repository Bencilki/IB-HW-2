import React, { Component } from 'react';
import './App.css';
import ComputerListContainer from './components/ComputerListContainer'
import {connect} from 'react-redux'


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
  state ={
    selectModel:''
  }
  
  

  modelList =() => {
    let list =[];
    for(let models in data){
      const model = data[models]
      list.push(<option key={models} value={models}> {`${models} (${model.year})`}</option>)
    }
    return list
  }

  updateSelection = (select) => {
    let showComp = select.target.value;
      this.setState({
      
      selectValue: showComp
    })

  }

  showSelected =() => {
    const showModel = Object.assign({name:this.state.selectValue}, data[this.state.selectValue])
    this.props.selectModel(showModel)
  }

  render() {
    return (
      <div className="App">
        <ComputerListContainer />
        <form>
        <select value = {this.state.value} onChange= {this.handleChange}>
        <option key='0' value= 'list'>-- pick a model --</option>
        {this.modelList()}
        </select>
        <button onClick={this.showSelected}>Add</button>
      
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSelected: state.showSelected,
    modelList: state.modelList,
    updateSelection: state.updateSelection
  }
}

export default connect(mapStateToProps)(App)
