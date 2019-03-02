import * as React from 'react'
import ComputerList from './ComputerList'
import {connect} from 'react-redux'
import {selectModel} from '../actions/action'

class ComputerListContainer extends React.Component{
    

   render() {
    return <ComputerList compModels={this.props.selectModel} />
}
}

const mapStateToProps = (state) => {
    return {
        compDetail: state.compDetail,
        selectModel: state.selectModel
    }
}

export default connect(mapStateToProps, {selectModel})(ComputerListContainer)