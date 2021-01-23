import React from 'react'
import './css/Results.css'
import { List } from 'antd';
import { ResultCard } from './ResultCard';

export const Results = ({results, totalResults, onSelectChange, onPageChange}) => {
    return (
        <div className='content-container' >
            <h1 className='title-header' style={{fontSize: 32}}>Search Results</h1>
            <h5>Found {totalResults} total results...</h5>
            <List
                grid={{
                gutter: [16, 16],
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 6,
                }}
                style={{position: "relative"}}
                dataSource={results}
                pagination={{
                    onChange: (page, pageSize) => onPageChange(page, pageSize), 
                    showTotal: total => `Total of ${total} items`,
                    defaultPageSize: 20, 
                    defaultCurrent: 1,  
                    total: totalResults, 
                    hideOnSinglePage: true}}
                renderItem={item => (
                    
                <List.Item style={{height: '220px !important', position: "relative", zIndex: 1}}>
                    <ResultCard result={item} onSelectChange={onSelectChange}/>
                </List.Item>
                )}
            />
        </div>
    )
}