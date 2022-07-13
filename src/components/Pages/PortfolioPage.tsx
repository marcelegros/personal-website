import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/PortfolioPage.css';

import ProjectCard from '../Utils/ProjectCard';


import {allProjects} from '../../constants/projects';


export const PortfolioPage = () => {

    const params = useParams();

    // Get the right portfolio pages
    let portfolioInfo = allProjects.find(e => e.groupId === params['groupId']);

    return <div className="portfolioPage fadeQuick">


        {/* Project Group Links */}
        {portfolioInfo && portfolioInfo.projects.map( (project, idx) => {

            const data = {
                title: project.projectName,
                text: project.description,
                imgPath: project.thumbnailImg,
                link: '/project/' + project.pId,
                stack: project?.stack,
                role: project.role
            };

            return <ProjectCard 
                invertLayout = {(idx % 2 === 0)}
                data = {data}
            />

        } )}

    </div>

}

export default PortfolioPage;