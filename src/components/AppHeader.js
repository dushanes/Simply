import React from 'react'
import './css/AppHeader.css'
import {Layout, Radio} from 'antd'
const Header = Layout.Header


export class AppHeader extends React.Component {
    constructor(prop){
        super(prop)
        const {_onClick} = this.props
    }

    render(){
        return(
            <Header className='app-header'>
                <div className='nav-container'>
                    <h1 id='app-title'>
                        Simply
                    </h1>
                    <Radio.Group optionType='button' defaultValue={false} buttonStyle="solid" onChange={(e) => this.toggleUnits(e)}>
                        <Radio.Button value={false}>US</Radio.Button>
                        <Radio.Button value={true}>Metric</Radio.Button>
                    </Radio.Group>
                </div>
            </Header>
        )
    }

    toggleUnits(e){
        this.props.unitFunc(e.target.value)
    }
}