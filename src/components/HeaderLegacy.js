import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import '../styles/Header.css';


const headerLinks = [

    {name: 'About', link: 'Bio'},
    {name: 'Web', link: 'Websites'},
    {name: 'Projects', link: 'Projects'},
    {name: 'Research', link: 'Research'},
    {name: 'Writing', link: 'Writing'},

]

class Header extends Component {


    render = () => {

        return (

            <div className="headerContainer">
                
                {/* Header logo */}
                {/* <img className="headerLogo" src = "/resources/LOGO.png"  onClick={() => this.props.history.push('/')}/> */}
                <div className='headerName' onClick={() => this.props.history.push('/')}> Marcel Legros</div>

                {/* Header credentials */}


                {/* Header Links*/}
                {headerLinks.map( linkData => {

                    return ( 

                        <div className='headerLink' onClick={() => this.props.history.push(linkData.link)}>
                            {linkData.name}
                        </div>

                    )


                })}

            </div>

        )
    }

}

export default withRouter(Header);