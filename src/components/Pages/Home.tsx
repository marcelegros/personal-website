import React, { Component } from 'react';

import '../../styles/Home.css';

import {allProjects} from '../../constants/projects';
import MeCard from '../Utils/MeCard';


export default () => {

    return <div className="homePageContainer fadeQuick">


        <div className='homeCardCenterer'>
            <MeCard/>
        </div>


    </div>


}

