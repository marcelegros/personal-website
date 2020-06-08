import React, { Component } from 'react';

import '../../styles/Bio.css';


class BioPage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="bioPageContainer">


                Bio Page

                <div className='bioPicContainer'>

                    <img className='bioPic' src='/resources/BioPic.JPG' />

                </div>

            </div>

        )
    }

}

export default BioPage;