import React from 'react'
import {Card} from 'antd'
import {Remarkable} from 'remarkable';
import './css/ResultCard.css'
import {
    FieldTimeOutlined
  } from '@ant-design/icons';
  
export const ResultCard = ({result, onSelectChange}) => {
    function createMarkup() {
        const md = new Remarkable();
        md.set({
            html: true,
            breaks: true
        });
    
        return {__html: md.render(result.summary)};
    }
      
    function Content() {
        return <h5 className="text-ellips" dangerouslySetInnerHTML={createMarkup()} />;
    }

    return(
        <Card className="card" 
        hoverable={true}
        title={<span style={{whiteSpace: 'pre-wrap'}}>{result.title}</span>}
        key={result.id}
        size='small'
        cover={<img src={result.image} alt={""}/>} 
        onClick={() => onSelectChange(result.id)}
        >
            <div className="card-body">
                {Content()}
                
                <div style={{display:'inline', width: '100%'}}>
                    <h5 className="stat-text" style={{float: 'left'}}>Calories: {parseInt(result.nutrition.nutrients[0].amount)}</h5>
                    <FieldTimeOutlined style={{float: 'right', fontSize:'1.2em'}}/>
                    <h5 className="stat-text">
                        {result.readyInMinutes} Minutes
                    </h5>   
                </div>
            </div>
        </Card> 
    )
}