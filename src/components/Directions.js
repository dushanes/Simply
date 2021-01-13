import React from 'react'
import './css/Directions.css'

export default class Directions extends React.Component {
    constructor(props){
        super(props)

        this.state= {}
    }

    render(){
        if(this.props.instructions) {
            var stepItems = this.props.instructions.map((step) => (
                <div className='list-item-container' id={step.number}  tabindex="0">
                    <h3>Step {step.number}:</h3>
                    <p>{step.step}</p>
                </div>
            ))
        }

        return (
                <div>
                    {
                        stepItems
                    }
                </div>
        )        
    }
}