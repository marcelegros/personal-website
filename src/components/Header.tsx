import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import "../styles/Header.css"


const links = [
    {display: 'Resume', link: '/resume'},
    {display: 'Research', link: '/portfolio/research'},
    {display: 'Writing', link: '/portfolio/writing'},
    {display: 'Software', link: '/portfolio/software'},
]


export const Header = () => {

    const navigate = useNavigate();

    const [ navOpen, setNavOpen ] = useState(false);


    const toHome = () => {
        setNavOpen(false);
        navigate("/");
    }

    const toLink = (link: string) => {
        setNavOpen(false);
        navigate(link);
    }

    const toggleNav = async () => {
        setNavOpen(!navOpen);
    }


    const pathRoot = '/' + window.location.pathname.split('/')[1];

    return  <div>

        <div className="Header">


            {/* Logo */}
            <p className='headerTitle'
                onClick = {() => toLink('/')}
            >
                Marcel Legros
            </p>


            {links.map( (linkData) => {
                return <p className={"HeaderOption" + (pathRoot === linkData.link ? ' HeaderActive' : '')} onClick={()=>toLink(linkData.link)} >{linkData.display}</p>
            })}
            
            {/* Nav Opener */}
            <img className='headerOpener' src='/resources/Icons/nav.png' alt='Nav'  onClick={toggleNav}/>

            {/* Side Nav */}
            <div className={'navBar' + (navOpen ? ' navBarOpen' : '')}>

                {links.map( (linkData, idx) => {
                    return <div className={'navOpt' + (pathRoot === linkData.link ? ' navOptActive' : '')}
                                onClick={()=>toLink(linkData.link)}
                            >
                        {linkData.display}

                    </div>
                } )}

                {/* TODO @Marcel: Add non link items here as well! (user settings, cart, etc) */}
                
            </div>

            {navOpen && 
                <div className='navBarExiter' onClick={()=>setNavOpen(false)}/>
            }
            
            
        </div>

    </div>
    

}


export default Header;