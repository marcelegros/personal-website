import React, { Component } from 'react';

import PageWrapper from './PageWrapper';

import {getProjById} from '../../constants/projects'
import "../../styles/ProjectPage.css";

export default (props) => {

    // Get Project 
    let project = getProjById(props.match.params.projectId);


    // Case Empty
    if (!project) {
        project = {
            projectName: "Not Found",
            bannerImg: '/resources/Backgrounds/Spires1.jpg'
        }
    }


    return <PageWrapper
        headerTitle = {project.projectName}
        headerDescription = {project.projectHeadTitle ?? ""}
        headerImg = {project.bannerImg}
    >


        {/* Body */}
       <div className='ProjectPageBody'>

           {/* Description */}
            {project.pageDescription && <div className='description'>
                {project.pageDescription}    
            </div>}

            {/* External Link? */}
            
            {project.externalLink && <div className='viewMore'>
                <a href={project.externalLink}>
                    View More
                </a>
            </div>}

            {/* Links? */}
            {project.externalLinks && project.externalLinks.length > 0 && <div>

                <h2>Links</h2>
                {project.externalLinks.map(l => <a
                    href={l}
                >
                    {l}
                </a>)}
                
            </div>}


       </div>


    </PageWrapper>

}