import React from 'react'
import './css/AppHeader.css'
import {Layout, Radio, Input} from 'antd'
const Header = Layout.Header
const Search = Input.Search


export const AppHeader = ({returnHome, onSearch, toggleUnits, setResults}) => {
    return(
        <Header className='app-header'>
                <div className='app-title' onClick={() => returnHome()} style={{cursor:'pointer'}}>
                    <h1 style={{color: 'white', marginBottom: '0px'}}>
                    Simply
                    </h1>
                </div>
                <Search 
                className='search-bar'
                placeholder="Search here" 
                enterButton={true}
                onSearch={(query) => _onSearch(query)} 
                />
                <Radio.Group style={{paddingTop: '8px'}} optionType='button' defaultValue={false} buttonStyle="solid" onChange={(e) => toggleUnits(e.target.value)}>
                    <Radio.Button value={false}>US</Radio.Button>
                    <Radio.Button value={true}>Metric</Radio.Button>
                </Radio.Group>
        </Header>
    )
    function _onSearch(query) {
        setResults([])
        onSearch(query)
    }
}