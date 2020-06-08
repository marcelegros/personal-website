import React, { Component } from 'react';

import '../../styles/Projects.css';

import DescriptionArc from '../DescriptionArc';

import projectDescriptions from '../../constants/projects';


class ProjectsPage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="projectsPageContainer">


                {projectDescriptions.map( project => {

                    return <div>
                        <DescriptionArc

                        title = {project.title}
                        properties = {project.properties}
                        description = {project.description}
                        image = {project.image}
                        video = {project.video}

                        />

                        <hr/>
                    </div>

                })}

            </div>

        )
    }

}

export default ProjectsPage;