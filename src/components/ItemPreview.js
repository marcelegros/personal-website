import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import '../styles/ItemPreview.css';



class ItemPreview extends Component {


    render = () => {

        return (

            <div className="itemPreviewContainer">
                
                {/* Display Image */}
                {/* TODO @Marcel: Relative Title / Click */}
                <div className='itemPreviewImgWrap' >
                    <img className='itemPreviewImg' src={this.props.data.imgPath} />
                </div>

                {/* Text */}
                <div className='itemPreviewText'> 
                    {this.props.data.text}

                </div>

            </div>

        )
    }

}

export default withRouter(ItemPreview);