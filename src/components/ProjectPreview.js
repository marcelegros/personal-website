import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import '../styles/ProjectPreview.css';



class ItemPreview extends Component {


    render = () => {

        return (

            <div className="projectPreviewContainer">
                
                {/* Display Image */}
                <div className='projectPreviewImgWrap' >
                    <img className='projectPreviewImg' src={this.props.data.imgPath} />
                </div>

                {/* Text */}
                <div className='projectPreviewText'> 

                    {/* Header */}
                    <h1
                        onClick = {() => this.props.history.push(this.props.data.link)}
                    >
                        {this.props.data.title}
                    </h1>

                    <p>
                        {this.props.data.text}
                    </p>

                </div>

            </div>

        )
    }

}

export default withRouter(ItemPreview);