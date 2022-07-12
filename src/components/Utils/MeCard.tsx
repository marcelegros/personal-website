import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

import '../../styles/MeCard.css';



const promos = [

    {
        title: 'Software',
        thumbnail: null,
        // backgroundImage: "url(/resources/Subjects/Software1.jpg)",
        link: '/portfolio/software'
    },
    {
        title: 'Writing',
        thumbnail: null,
        link: '/portfolio/writing'
    },
    {
        title: 'Research',
        thumbnail: null,
        link: '/portfolio/research'
    },
    

]

export interface MeCardProps {

}

export default (props: MeCardProps) => {

    const navigate = useNavigate();


    const promoClick = (link: string) => {

        navigate(link);

    }

    return <div className='meCard'>

        <div className='leadImgContainer'>
            <img
                src = '/resources/Me/Me2.jpeg'
            />
        </div>

        <div className='textContainer'>

            <h1>
                Hello!
            </h1>

            <p>
                My name is Marcel. I'm a software developer and writer based in Pittsburth, and New York. 
            </p>

            <p>
                I like to work on projects that excite me, and challenge me. 
            </p>

            <p>
                Here are a few things I've worked on so far. 
            </p>

            <div className='promos'>
                {promos.map(promo => {

                    return  <div className='promoCard' onClick={() => promoClick(promo.link)}>
                        <h1>{promo.title}</h1>
                    </div>

                })}
            </div>
           

           



        </div>

    </div>

}