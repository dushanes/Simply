import React from 'react'
import './css/SplashPage.css'
import splash from '/Users/KNight/Documents/Projects/simply/src/components/wallpaper-display.jpg'
function SplashPage() {
    return(
        <div className='splash-container'>
            <img 
            alt='splash'
            className='splash-img'
            src={splash}/>
        </div>
    );
} 

export default SplashPage