import React, { Component } from 'react';

import HeaderImage from '../HeaderImage';
import utilities from '../../utilities';

import '../../styles/PageWrapper.css';

export interface PageWrapperProps {

    headerTitle: string,
    headerDescription: string,
    headerImg: string,
    children: any,
    externalLink?: string,
    codeLink?: string,

}

export default (props: PageWrapperProps) => {

    utilities.hooks.useEffectOnce(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    })


    return <div className='fadeQuick'>

        {/* Header Image */}
        <div className='pageWrapperOutter'>

            <HeaderImage
                fadeDown = {true}
                headerTitle = {props.headerTitle}
                headerDescription = {props.headerDescription}
                src = {props.headerImg}
                externalLink = {props.externalLink}
                codeLink = {props.codeLink}
            />

        </div>

        {/* Body */}
        <div className='pageWrapperBody'>

            {props.children}

        </div>


    </div>

}