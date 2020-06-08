import React, { Component } from 'react';

import '../../styles/Websites.css';

import DescriptionArc from '../DescriptionArc';

import websiteDescriptions from '../../constants/websites';

class WebsitesPage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="websitesPageContainer">


                {websiteDescriptions.map( website => {

                return <div>
                    <DescriptionArc

                    title = {website.title}
                    properties = {website.properties}
                    description = {website.description}
                    image = {website.image}
                    video = {website.video}

                    />

                    <hr/>
                </div>

                })}

            </div>

        )
    }

}

export default WebsitesPage;