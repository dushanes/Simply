import React from 'react'

export const CircleImage = ({url, title, action}) =>{
    return(
        <div style={{display: "block", textAlign: "center", marginLeft: '12px'}}>
            <img height={80} width={80} style={{'border-radius': "50%"}}  src={url} alt={title}/>
            <h5 style={{padding:'4px', width: "120px"}}> {title} </h5>
        </div>
    )
}