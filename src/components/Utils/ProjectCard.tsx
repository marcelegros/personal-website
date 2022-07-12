import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

import '../../styles/Utils/ProjectCard.css';



export interface ProjectCard {

    invertLayout: boolean,
    data: {
        imgPath: string,
        link: string,
        title: string,
        text: string,
        stack: string[],
    }

}


export default (props: ProjectCard) => {

    const navigate = useNavigate();


    const promoClick = (link: string) => {

        navigate(link)

    }

    return <div className={'projectCard' + (props.invertLayout ? " projectCardLeft" : "")} onClick = {() =>navigate(props.data.link)}>

        <div className='leadImgContainer'>
            <img
                src={props.data.imgPath}
            />
        </div>

        <div className='textContainer'>

            <h2>
                {props.data.title}
            </h2>

            <p>
                {props.data.text}
            </p>

            <div className='productCardSpecs'>

                {props.data.stack && <>
                    <h3>Stack</h3>
                    {props.data.stack.map(s => {
                        return <div>
                            {'• ' + s}
                        </div>
                    })}
                </>}


            </div>
           

           



        </div>

    </div>

}