import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import PageWrapper from './PageWrapper';

import {getProjById} from '../../constants/projects'
import "../../styles/ProjectPage.css";
import PageStorySection from '../Utils/PageStorySection';

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

            {/* TODO @Marcel: I should have a "Visit the Project" button pretty high up here! With a nice picture :) */}

            {/* Body */}
            <div className='ProjectPageBody'>

                {/* Description */}
                {project?.pageDescription && <div className='description'>
                    {project.pageDescription}    
                </div>}

                {/* Story */}
                {project.productStory.map((storyElem, idx) => {

                    return <PageStorySection
                        story={storyElem} 
                        key = {idx}
                    />

                })}

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