import React, { Component } from 'react';

import '../styles/HeaderImage.css';


export interface HeaderImageProps {
    src: string,
    fadeDown: boolean,
    headerTitle: string,
    headerDescription: string,
    externalLink?: string,
    codeLink?: string,
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

                {props.externalLink && <a href={props.externalLink}>View the Project</a>}

                {props.codeLink && <a href={props.codeLink}>View the Code</a>}

            </div>

        </div>

    </div>

}