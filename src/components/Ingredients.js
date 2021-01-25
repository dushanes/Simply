import React from 'react'

export default class Ingredients extends React.Component {
    constructor(props){
        super(props)

        this.state= {}
    }
    render(){
        if(this.props.items) {
            var ingredItems = this.props.items.map((item) => (
                <div className='list-item-container'>
                    <h3 style={{textTransform: 'capitalize'}}>{item.name}:</h3>
                    {this.props.useMetric ? (<p>{item.measures.metric.amount} {item.measures.metric.unitLong}</p>): (<p>{item.measures.us.amount} {item.measures.us.unitLong}</p>) }
                </div>
            ))
        }

        return (
                <div>
                    {
                        ingredItems
                    }
                </div>
        )        
    }
}