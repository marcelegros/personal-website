import React, { Component } from 'react';

import '../styles/HeaderImage.css';



export default (props) => {


    return <div className='headerImgWrapper'>

        {/* Backgroud Image */}
        <img 
            src = {props.src}
        />

        {/* Image Fade */}
        {props.fadeDown &&
            <div className='headerImgFade'/>
        }

        <div className='headerImgTxtWrapper'>

            <div className='headerImgTxt'>

                
                <h1>{props.headerTitle}</h1>

                <p>{props.headerDescription}</p>

            </div>

        </div>

    </div>

}