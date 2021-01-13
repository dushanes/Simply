import React from 'react'

export class SearchItem extends React.Component {
    constructor(props){
        super(props)
        const { title, kal } = this.props
    }

    render(){
        return (
            <div className='result-container'>
                <h3>{this.title}</h3>
                <h4>{this.kal}</h4>
            </div>
        )
    }
}