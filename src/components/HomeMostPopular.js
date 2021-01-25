import React, { useEffect } from 'react'
import { List, Divider, Button } from 'antd'
import { ResultCard } from './ResultCard'
import './css/HomeMostPopular.css'
import breakfast from './img/breakfast.jpg'

export const HomeMostPopular = ({data, getData, onSelectChange}) => {
    let test = [
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
        {id:"0001", title:"Apple Caramel encrusted banana split ice cream potato", image: breakfast},
    ]
    useEffect(() => {
        getData()
        console.log('mounted');  
      }, []);
    return (
        <div className='home-most-popular' >
            <h1 className='title-header' style={{fontSize: 28}}>Most Popular</h1>
            <Divider/>
            <List
                grid={{
                gutter: [16, 16],
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xl: 2,
                xxl: 2,
                }}
                style={{position: "relative"}}
                pagination={{defaultPageSize: 4, hideOnSinglePage: true}}
                dataSource={data}
                renderItem={item => (
                    
                <List.Item style={{height: '220px !important', position: "relative", zIndex: 1}}>
                    <ResultCard result={item} onSelectChange={onSelectChange}/>
                </List.Item>
                )}
            />
            <Button style={{float: 'right', marginRight: "15px", marginTop: '16px'}} type="primary">See More</Button>
        </div>

    )
}