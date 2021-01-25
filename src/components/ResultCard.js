import React from 'react'
import {Card} from 'antd'
import {
    FieldTimeOutlined
  } from '@ant-design/icons';
export const ResultCard = ({result, onSelectChange}) => {
    return(
        <Card className="card" 
        hoverable={true}
        title={result.title}
        key={result.id}
        size='small'
        cover={<img src={result.image} alt={""}/>} 
        onClick={() => onSelectChange(result.id)}
        >
            <div className="card-body">
                <h5 className="stat-text" style={{}}>Calories: 500</h5>
                <div style={{display:'inline', width: '100%'}}>
                    <FieldTimeOutlined style={{float: 'right', fontSize:'1.2em'}}/>
                    <h5 className="stat-text" style={{float: 'right', marginRight: '8px'}}>{result.readyInMinutes} Minutes</h5>   
                </div>
            </div>
        </Card> 
    )
}