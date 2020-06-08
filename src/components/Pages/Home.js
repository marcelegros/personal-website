import React, { Component } from 'react';

import '../../styles/Home.css';

import ItemPreview from '../ItemPreview';


import previewData from '../../constants/homePreviewData';


class HomePage extends Component {

    state = {

    }

    componentDidMount = () => {
        
    }



    render = () => {

        return (

            <div className="homePageContainer">


                {/* Item previews */}
                {previewData.map( previewElem => {

                    return (
                        <ItemPreview data={previewElem} />
                    )

                })}

            </div>

        )
    }

}

export default HomePage;