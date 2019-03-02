import * as React from 'react'
import ComputerList from './ComputerList'
import {connect} from 'react-redux'

class ComputerListContainer extends React.Component{
    selectModel(models) {
        console.log('selected', models)
    }
    selectModel = (models) => {
        this.props.dispatch({
            type: 'SELECT_MODEL',
            payload: models
        })
    }

    render(){
        return <ComputerList 
        models={this.props.models} 
        selectModel={this.selectModel}/>
        
    }
}

const mapStateToProps = (state) => {
    return {
        models: state.models,
        selectModel: state.selectModel
    }
}

export default connect(mapStateToProps)(ComputerListContainer)