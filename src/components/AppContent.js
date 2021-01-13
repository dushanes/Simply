import React from 'react'
import {Layout, Row, Col} from 'antd'
import SplashPage from './SplashPage.js'
import Directions from './Directions'
import Ingredients from './Ingredients'
import './css/AppContent.css'
import {Remarkable} from 'remarkable';
const Content = Layout.Content

export class AppContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ID: props.ID,
            recipe: props.recipe
        }
    }

    render(){
        return (this.props.ID < 0) ? 
        (
            <Content className='content'>
                <div className='content-container'>
                    <SplashPage/>
                </div>
            </Content>
        )
        :(
            <Content className='content'>
                <div className='content-container'>
                    <div className='grid-root'>
                        <Row>
                            <Col>
                            <div id='title-container'>
                                <h1 id='title-food'className='title-header'>{this.props.recipe.title}</h1>
                            </div>
                            <div className='food-img-container'>
                                <img id='food-img' alt='food-name' src={this.props.recipe.image}/>
                            </div>
                            {this.MyComponent()}
                            </Col>
                        </Row>
                        <Row justify='center' gutter='2'>
                            <Col span={8}>
                                <h2 className='title-header'>Ingredients</h2>
                                <Ingredients items={this.props.ingred} useMetric={this.props.useMetric}/>
                            </Col>
                            <Col span={8} offset={2}>
                                <h2 className='title-header'>Directions</h2>
                                <Directions instructions={this.props.instructions}/>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Content>  
        )
    }

    createMarkup() {
    const md = new Remarkable();
    md.set({
        html: true,
        breaks: true
    });

    return {__html: md.render(this.props.recipe.summary)};
  }
  
   MyComponent() {
    return <div className='desc-source'dangerouslySetInnerHTML={this.createMarkup()} />;
  }

    
}

