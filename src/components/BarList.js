import React from 'react'
import './css/BarList.css'
import { CircleImage } from './CircleImage'
import appetizer from "./img/appetizer.jpg"
import breakfast from "./img/breakfast.jpg"
import lunch from "./img/lunch.jpg"
import chicken from "./img/chicken.jpg"
import steak from "./img/steak.jpg"
import salad from "./img/salad.jpg"
import soup from "./img/soup.jpg"

export const BarList = ({getType, onSearch}) => {
    const data = [
        {title: "Appetizer Recipies", url: appetizer, type:"appetizer"},
        {title: "Breakfast and Brunch Recipies", url: breakfast, type:"breakfast"},
        {title: "Snack Recipies", url: lunch, type:"snack"},
        {title: "Chicken Recipies", url: chicken, query:"chicken"},
        {title: "Steak Recipies", url: steak, query:"steak"},
        {title: "Salad Recipies", url: salad, type:"salad"},
        {title: "Soup Recipies", url: soup, type:"soup"}
    ]
    return (
        <div className="bar-list-container">
            {data.map(({title, url, type, query}) => {
                const action = type ? getType : onSearch
                if(type){
                    return (
                    <div style={{cursor: "pointer" }} onClick={() => action("", type)}>
                        <CircleImage title={title} url={url}/>
                    </div>
                    )
                }else{
                    return (
                    <div style={{cursor: "pointer" }} onClick={() => action(query)}>
                        <CircleImage title={title} url={url}/>
                    </div>
                    )
                }
            })}
        </div>
    )
}