import React, { useEffect } from 'react'
import { List, Divider, Button } from 'antd'
import { ResultCard } from './ResultCard'
import './css/HomeExplore.css'

export const HomeExplore = ({data, getData, onSearch, onSelectChange}) => {

    useEffect(() => {
        getData()
        console.log('mounted');  
      }, []);

    return (
        <div className='home-explore' >
            <h1 className='title-header' style={{fontSize: 28}}>Explore</h1>
            <Divider/>
            <List
                grid={{
                gutter: [16, 16],
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 3,
                xxl: 3,
                }}
                style={{position: "relative"}}
                pagination={{defaultPageSize: 6, hideOnSinglePage: true}}
                dataSource={data}
                renderItem={item => (
                    
                <List.Item style={{height: '220px !important', position: "relative", zIndex: 1}}>
                    <ResultCard result={item} onSelectChange={onSelectChange}/>
                </List.Item>
                )}
            />
            <Button onClick={() => onSearch("", "", 0, undefined,"random")} style={{float: 'right', marginRight: "15px", marginTop: '16px'}} type="primary">See More</Button>
        </div>
    )
}