import * as React from 'react'


export default function ComputerList(props){
    return (<div>
         <ul>
             { props.models.map(model => 
                <li key={model.name} onClick={() => props.selectModel(model.name)}>
                { model.name }
              </li>)}
        </ul>
    </div>)
}