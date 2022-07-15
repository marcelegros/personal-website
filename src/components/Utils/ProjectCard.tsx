import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

import '../../styles/Utils/ProjectCard.css';
import StackAndRoles from './StackAndRoles';



export interface ProjectCard {

    invertLayout: boolean,
    data: {
        imgPath: string,
        link: string,
        title: string,
        text: string,
        stack: string[],
        role: string[],
    },
    noPage?: boolean,

}


export default (props: ProjectCard) => {

    const navigate = useNavigate();


    const promoClick = (link: string) => {

        navigate(link)

    }

    const onClick = () => {

        if (props.noPage)
            return;

        navigate(props.data.link);

    }

    return <div className={'projectCard' + (props.invertLayout ? " projectCardLeft" : "")} onClick = {onClick}>

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

            <StackAndRoles
                stack = {props.data.stack}
                role = {props.data.role}
                flip = {true}
            />
           

           



        </div>

    </div>

}