import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import "../styles/Header.css"


const links = [
    {display: 'Research', link: '/portfolio/research'},
    {display: 'Writing', link: '/portfolio/writing'},
    {display: 'Software', link: '/portfolio/software'},
]



class Header extends Component {


    state = {

        navOpen: false,

        userInfoOpen: false,

    }

    toHome = () => {
        this.setState({ navOpen: false });
        this.props.history.push("/");
    }

    toLink = (link) => {
        this.setState({ navOpen: false });
        this.props.history.push(link);
    }

    toggleNav = async () => {
        await this.setState({ navOpen: !this.state.navOpen });
    }





    render = () => {

        const pathRoot = '/' + window.location.pathname.split('/')[1];

        return (
            <div>
                <div className="Header">


                    {/* Logo */}
                    <p className='headerTitle'
                        onClick = {() => this.toLink('/')}
                    >
                        Marcel Legros
                        </p>


                    {links.map( (linkData) => {
                        return <p className={"HeaderOption" + (pathRoot === linkData.link ? ' HeaderActive' : '')} onClick={()=>this.toLink(linkData.link)} >{linkData.display}</p>
                    })}
                    
                    {/* Nav Opener */}
                    <img className='headerOpener' src='/resources/Icons/nav.png' alt='Nav'  onClick={this.toggleNav}/>

                    {/* Side Nav */}
                    <div className={'navBar' + (this.state.navOpen ? ' navBarOpen' : '')}>

                        {links.map( (linkData, idx) => {
                            return <div className={'navOpt' + (pathRoot === linkData.link ? ' navOptActive' : '')}
                                        onClick={()=>this.toLink(linkData.link)}
                                    >
                                {linkData.display}

                            </div>
                        } )}

                        {/* TODO @Marcel: Add non link items here as well! (user settings, cart, etc) */}
                        
                    </div>

                    {this.state.navOpen && 
                        <div className='navBarExiter' onClick={()=>this.setState({navOpen: false})}/>
                    }
                    
                    
                </div>


            </div>
        )
    }

}


export default withRouter(Header);