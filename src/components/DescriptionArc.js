

import React, { Component } from 'react';


import '../styles/Description.css';


export default class DescriptionArc extends Component {

    state = {


    }



    render = () => {

        return (

            <div className='descriptionContainer'>

                {/* Title */}
                <h1>{this.props.title}</h1>

                {/* Image */}
                {this.props.image &&
                    <div className='descriptionImgContainer'>
                        <img className='descriptionImg' src={this.props.image} />
                    </div>
                }

                {/* Video */}
                {this.props.video &&
                    <div className='descriptionImgContainer'>
                        <video className='descriptionImg' controls >
                            <source src={this.props.video} type="video/mp4" />
                        </video>
                    </div>
                }


                {/* Properties */}
                {this.props.properties.map( propertyData => {
                    return <div>
                        <div className='propertyKey'> {propertyData.key} </div>
                        <div className='propertyValue'> {propertyData.link ? <a href={propertyData.link} target="_blank"> {propertyData.value}</a> : propertyData.value} </div>
                    </div>

                })}

                {/* Description */}
                <div className='descriptionText'>
                    {this.props.description}
                </div>


            </div>

        )


    }




}