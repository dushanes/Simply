import React from 'react'
import {Card} from 'antd'

export const ResultCard = (props) => {
    const {result} = props
    return(
        <Card className="card" 
        hoverable={true}
        key={result.id}
        size='small'
        cover={<img id='card-img'src={result.image} alt={result.title}/>} 
        onClick={() => props.onSelectChange(result.id)}
        >
            <div className="card-body">
                <h4 className="food-title">{result.title}</h4>
            </div>
        </Card> 
    )
}