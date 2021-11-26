import React, { Component } from 'react';

import '../../styles/Home.css';

import ProjectPreview from '../ProjectPreview';


import previewData from '../../constants/homePreviewData';
import {allProjects} from '../../constants/projects';


class HomePage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="homePageContainer fadeQuick">


                {/* Project Group Links */}
                {allProjects.map( (projectGroup, pGIdx) => {

                    const data = {
                        title: projectGroup.groupName,
                        text: projectGroup.groupDescription,
                        imgPath: projectGroup.imgPath,
                        link: '/portfolio/' + projectGroup.groupId,
                    };

                    return <ProjectPreview 
                        data = {data}
                    />

                } )}

            </div>

        )
    }

}

export default HomePage;