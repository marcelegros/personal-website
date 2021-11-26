import React, { Component } from 'react';

import '../../styles/PortfolioPage.css';

import ProjectPreview from '../ProjectPreview';


import {allProjects} from '../../constants/projects';


class PortfolioPage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {


        // Get the right portfolio pages
        let portfolioInfo = allProjects.find(e => e.groupId === this.props.match.params.groupId);



        return (

            <div className="portfolioPage fadeQuick">


                {/* Project Group Links */}
                {portfolioInfo.projects.map( (project, idx) => {

                    const data = {
                        title: project.projectName,
                        text: project.description,
                        imgPath: project.imgPath,
                        link: '/project/' + project.pId,
                    };

                    return <ProjectPreview 
                        data = {data}
                    />

                } )}

            </div>

        )
    }

}

export default PortfolioPage;