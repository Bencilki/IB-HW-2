import * as React from 'react'


export default function ComputerList(props){
    const compModels = props.compModels

    return (
    <div>
         {this.props.compModels.map(comp =>
            <ul key= {compModels}>
                <li>{`name : ${comp.name}` }</li>
                <li>{`manufacturer : ${comp.manufacturer}` }</li>
                <li>{`year : ${comp.year}` }</li>
                <li>{`origin : ${comp.origin}` }</li>
                
            </ul>
         )}
    </div>
    )
}