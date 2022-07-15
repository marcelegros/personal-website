import React from "react";
import { ProjectStoryPhase } from '../../constants/types';
import ItemCarousel from "./ItemCarousel";
import '../../styles/Pages/PageStorySection.css'
import StackAndRoles from "./StackAndRoles";
import ReactPlayer from 'react-player';


export interface PageStorySectionProps {

    story: ProjectStoryPhase

}

export const PageStorySection = (props: PageStorySectionProps) => {


    return <div className="pageStorySection">

        <h2>{props.story.title}</h2>

        {props.story.stack && <div>
            <StackAndRoles 
                stack = {props.story.stack}
                role = {[]}
            />
        </div>}

        {props.story.preDescription && <>

            <div className="pageStoryDescription">
                {props.story.preDescription}
            </div>

        </>}
        

        <div className="imageCarousel">
            <ItemCarousel>
                {props.story.imageGallery.map((img, idx) => {
                    return <div 
                        key={idx}
                        style={{width: '100%', height: 600, overflow: 'hidden'}}
                    >
                        <img src={img} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>

                    </div>
                })}
                
            </ItemCarousel>
        </div>

        {props.story.videoGallery.length > 0 && 
            <ItemCarousel>

                {props.story.videoGallery.map((video, idx) => {

                    return <ReactPlayer 
                        key = {idx}
                        url = {video}
                        controls = {true}
                        width = {'100%'}
                        height = {'calc(100% - 5px)'}
                    />

                })}
                

            </ItemCarousel>
        
        }
        

        {props.story.description && <>

            <div className="pageStoryDescription">
                {props.story.description}
            </div>

        </>}

        {props.story.iframeLink && <iframe 
            className="pageStoryIframe" 
            src={props.story.iframeLink}
        />}


    </div>


}

export default PageStorySection;