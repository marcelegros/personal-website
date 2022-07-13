import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

import '../../styles/Utils/ProjectCard.css';



export interface StackAndRolesProps {

    stack: string[],
    role: string[],
}


export default (props: StackAndRolesProps) => {

    const navigate = useNavigate();

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
        if (name === "Stripe")
            return "rgb(88, 96, 209)"
        if (name.includes("AWS"))
            return "rgb(33, 39, 49)"
        if (name.toLocaleLowerCase() === "python")
            return "rgb(46, 96, 144)"


        return undefined;

    }

    return <div className='productCardSpecs'>

        {props.stack && props.stack.length > 0 && <>
            <h3>Stack</h3>
            <div className='stackList'>
                {props.stack.map(s => {
                    return <div className='stackItem' style={{backgroundColor: getStackColor(s)}}>
                        {s}
                    </div>
                })}
            </div>
        </>}

        {props.role && props.role.length > 0 && <>
        
            <h3>Roles</h3>
            <div className='stackList'>
                {props.role.map(r => {
                    return <div className='stackItem' style={{backgroundColor: getStackColor(r)}}>
                        {r}
                    </div>
                })}
            </div>

        </>}

        


    </div>
    
}