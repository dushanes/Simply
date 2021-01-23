import React from 'react'
import { List } from 'antd'
import { ResultCard } from './ResultCard'
import './css/HomeMostPopular.css'

export const HomeMostPopular = ({data, getData}) => {
    getData()
    return (
        <div className='home-most-popular' >
            <h1 className='title-header' style={{fontSize: 28}}>Most Popular</h1>
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
                    <ResultCard result={item}/>
                </List.Item>
                )}
            />
        </div>

    )
}