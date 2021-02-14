import React from 'react'
import './css/Recipe.css'
import {Row, Col, Divider} from 'antd'
import Directions from './Directions'
import Ingredients from './Ingredients'
import {Remarkable} from 'remarkable';

export const Recipe = ({recipe, useMetric, ingred, instructions}) => {
    
    function createMarkup() {
        const md = new Remarkable();
        md.set({
            html: true,
            breaks: true
        });
    
        return {__html: md.render(recipe.summary)};
    }
      
    function Content() {
        return <div className='desc-source'dangerouslySetInnerHTML={createMarkup()} />;
    }
    
    return(
        <div className='grid-root'>
            <Row>
                <Col>
                    <div id='title-container'>
                        <h1 id='title-food' className='title-header'>{recipe.title}</h1>
                    </div>
                    <div className='food-img-container'>
                        <img className='food-img' alt='food-name' src={recipe.image}/>
                    </div>
                    {Content()}
                </Col>
            </Row>
            <Row justify='center' gutter='2'>
                <Col span={8}>
                    <h2 className='title-header'>Ingredients</h2>
                    <Divider/>
                    <Ingredients items={ingred} useMetric={useMetric}/>
                </Col>
                <Col span={8} offset={2}>
                    <h2 className='title-header'>Directions</h2>
                    <Divider/>
                    <Directions instructions={instructions}/>
                </Col>
            </Row>
        </div>
    )
}