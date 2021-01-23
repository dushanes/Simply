import React from 'react'
import './css/AppHeader.css'
import {Layout, Radio, Input} from 'antd'
const Header = Layout.Header
const Search = Input.Search


export const AppHeader = ({returnHome, onSearch, toggleUnits, setResults}) => {
    return(
        <Header className='app-header'>
            <div className='nav-container'>
                <div className='app-title' onClick={() => returnHome()} style={{cursor:'pointer'}}>
                    <h1 style={{color: 'white'}}>
                    Simply
                    </h1>
                </div>
                <div className='search-bar'>
                    <Search 
                    placeholder="Search here" 
                    enterButton={true}
                    onSearch={(query) => _onSearch(query)} 
                    />
                </div>
                <Radio.Group optionType='button' defaultValue={false} buttonStyle="solid" onChange={(e) => toggleUnits(e.target.value)}>
                    <Radio.Button value={false}>US</Radio.Button>
                    <Radio.Button value={true}>Metric</Radio.Button>
                </Radio.Group>
            </div>
        </Header>
    )
    function _onSearch(query) {
        setResults([])
        onSearch(query)
    }
}