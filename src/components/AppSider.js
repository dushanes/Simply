import React from 'react'
import './css/AppSider.css';
import {Layout} from 'antd'
import { Results } from './Results';
const Sider = Layout.Sider


export class AppSider extends React.Component {
    render(){
        return(
            <Sider className='app-sider' theme='light' width={400} >
                <div className='search-results'>
                    <Results 
                     results={this.props.results} 
                     totalResults={this.props.totalResults} 
                     onSelectChange={this.props.onSelectChange}
                     />
                </div>
            </Sider>
        )
    }
 }