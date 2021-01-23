import React from 'react'
import { List } from 'antd'
import { ResultCard } from './ResultCard'
import './css/HomeExplore.css'

export const HomeExplore = ({data, getData}) => {
    getData()
    return (
        <div className='home-explore' >
            <h1 className='title-header' style={{fontSize: 28}}>Explore</h1>
            <List
                grid={{
                gutter: [16, 16],
                xs: 2,
                sm: 3,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 4,
                }}
                style={{position: "relative"}}
                pagination={{defaultPageSize: 9, hideOnSinglePage: true}}
                dataSource={data}
                renderItem={item => (
                    
                <List.Item style={{height: '220px !important', position: "relative", zIndex: 1}}>
                    <ResultCard result={item}/>
                </List.Item>
                )}
            />
            <div style={{cursor: 'pointer'}}>
                <h4 style={{float: 'right', marginRight: "15px"}}>Explore more...</h4>
            </div>
        </div>
    )
}