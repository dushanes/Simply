import React from 'react'

export const CircleImage = ({url, title, action}) =>{
    return(
        <div style={{display: "block", textAlign: "center", marginLeft: '12px'}}>
            <img height={80} width={80} style={{borderRadius: "100%", border: "solid", borderColor: '#BB9457', boxShadow: "0px 0px 12px 0px #969696", zIndex:2}}  src={url} alt={title}/>
            <h5 style={{padding:'8px', width: "120px"}}> {title} </h5>
        </div>
    )
}