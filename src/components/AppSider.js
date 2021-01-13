import React from 'react'
import 'antd/dist/antd.less';
import './css/AppSider.css';
import {Input, Layout} from 'antd'
import { Results } from './Results';
const Sider = Layout.Sider
const Search = Input.Search


export class AppSider extends React.Component {
    render(){
        return(
            <Sider className='app-sider' theme='light' width={400} >
                <div id='search-bar'>
                    <Search 
                     placeholder="Search here" 
                     enterButton={true}
                     onSearch={value => this.searchRecipes(value)} 
                     />
                </div>
                <div className='search-results'>
                    <Results 
                     results={this.props.results} 
                     totalResults={this.props.totalResults} 
                     onSelectChange={this.props.onSelectChange}
                     loading={this.props.loading}
                     />
                </div>
            </Sider>
        )
    }

    searchRecipes(query){
        this.props.onSearch(query)
    }
 }