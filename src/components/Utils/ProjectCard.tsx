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
    }

}


export default (props: ProjectCard) => {

    const navigate = useNavigate();


    const promoClick = (link: string) => {

        navigate(link)

    }

    const getStackColor = (name: string) => {

        // return undefined;

        if (name === "React")
            return "rgb(90, 212, 248)"
        if (name === "Typescript")
            return "rgb(44, 108, 189)"
        if (name === "Jest")
            return "rgb(141, 59, 81)"
        if (name === "MongoDB")
            return "rgb(64, 147, 64)"
        if (name === "C++")
            return "rgb(87, 134, 190)"
        if (name === "Docker")
            return "rgb(36, 130, 218)"
        if (name === "Javascript")
            return "rgb(230, 207, 47"

        return undefined;

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

            <StackAndRoles
                stack = {props.data.stack}
                role = {props.data.role}
            />
           

           



        </div>

    </div>

}