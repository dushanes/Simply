import React from 'react'
import { HomeMostPopular } from './HomeMostPopular'
import { HomeExplore } from './HomeExplore'
import { Recipe } from './Recipe'
import './css/AppContent.css'

export const AppContent = ({ID, recipe, useMetric, ingred, instructions, popularData, getPopularData, exploreData, getExploreData, onSelectChange}) => {
    /*const transitions = useTransition(ID < 0, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    */

    return (ID < 0) ?
        <div className='content-container' style={{flexDirection: 'row'}}>
            <HomeMostPopular data={popularData} getData={getPopularData} onSelectChange={onSelectChange}/>
            <HomeExplore data={exploreData} getData={getExploreData} onSelectChange={onSelectChange}/>
        </div>
        :
        <div className='content-container' >
            <Recipe recipe={recipe} useMetric={useMetric} ingred={ingred} instructions={instructions}/>
        </div>
}

