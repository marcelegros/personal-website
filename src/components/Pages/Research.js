import React, { Component } from 'react';

import '../../styles/Research.css';

import DescriptionArc from '../DescriptionArc';

import researchDescriptions from '../../constants/research';

class ResearchPage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="researchPageContainer">


                {researchDescriptions.map( research => {

                return <div>
                    <DescriptionArc

                    title = {research.title}
                    properties = {research.properties}
                    description = {research.description}
                    image = {research.image}
                    video = {research.video}

                    />

                    <hr/>
                </div>

                })}

            </div>

        )
    }

}

export default ResearchPage;