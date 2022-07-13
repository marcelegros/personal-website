import React from "react";
import { ProjectStoryPhase } from '../../constants/types';
import ItemCarousel from "./ItemCarousel";
import '../../styles/Pages/PageStorySection.css'
import StackAndRoles from "./StackAndRoles";

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

        <div className="imageCarousel">
            <ItemCarousel>
                {props.story.imageGallery.map((img, idx) => {
                    return <div 
                        key={idx}
                        style={{width: '100%', height: 600, overflow: 'hidden'}}
                    >
                        <img src={img} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>

                    </div>
                })}
                
            </ItemCarousel>
        </div>

        <div className="pageStoryDescription">
            {props.story.description}
        </div>

        {props.story.iframeLink && <iframe 
            className="pageStoryIframe" 
            src={props.story.iframeLink}
        />}


    </div>


}

export default PageStorySection;