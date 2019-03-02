

selectModel = (models) => {
    this.props.dispatch({
        type: 'SELECT_MODEL',
        payload: models
    })
}


(<div>
    {this.props.selectModel.map(comp =>{
        return <ComputerList
        key = {comp.name}
        name = {comp.name}
        manufacturer = {comp.manufacturer}
        year = {comp.manufacturer}
        origin ={comp.origin}
        />
    })}    
</div>
)