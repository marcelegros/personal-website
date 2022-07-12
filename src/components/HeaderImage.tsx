import React, { Component } from 'react';

import '../styles/HeaderImage.css';


export interface HeaderImageProps {
    src: string,
    fadeDown: boolean,
    headerTitle: string,
    headerDescription: string,
}

export default (props: HeaderImageProps) => {


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