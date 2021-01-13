import React, { useState, useEffect } from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.less';
import './css/Results.css'
import {useSpring, useTransition, animated, config} from 'react-spring'
import {Transition} from 'react-spring/renderprops'


export function Results(props){
    const [loading, setLoading] = useState(props)
    const [results, setResults] = useState(props)

    const cardStyles = useSpring({opacity: loading ? 1 : 0})

    useEffect(() => {
        setLoading(props);
        setResults(props);
      }, [props]);

    return (
        <div>
            {!loading && props.results.map((result) => (
                <Transition
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {
                    <Card className="card" 
                    hoverable={true} 
                    size='small'
                    cover={<img id='card-img'src={result.image}/>} 
                    onClick={() => props.onSelectChange(result.id)}
                    loading={loading}>
                        <div className="card-body">
                            <h4 className="food-title">{result.title}</h4>
                        </div>
                    </Card>
                }
                </Transition>
            ))}
        </div>
    )
}