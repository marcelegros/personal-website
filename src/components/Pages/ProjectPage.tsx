import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import PageWrapper from './PageWrapper';

import {getProjById} from '../../constants/projects'
import "../../styles/ProjectPage.css";

export interface ProjectPageProps {



}


export default (props: ProjectPageProps) => {

    const params = useParams();

    // Get Project 
    let project = getProjById(params['projectId'] ?? "");


    return <PageWrapper
        headerTitle = {project?.projectName ?? "Not Found"}
        headerDescription = {project?.projectHeadTitle ?? ""}
        headerImg = {project?.bannerImg ?? ""}
    >

        {project ? <>

            {/* Body */}
            <div className='ProjectPageBody'>

                {/* Description */}
                {project?.pageDescription && <div className='description'>
                    {project.pageDescription}    
                </div>}

                {/* External Link? */}
                
                {project.externalLink && <div className='viewMore'>
                    <a href={project.externalLink}>
                        View More
                    </a>
                </div>}


            </div>
        
        </> : <>

            {/* Body */}
            <div className='ProjectPageBody'>

            </div>
        
        </>}

        


    </PageWrapper>

}