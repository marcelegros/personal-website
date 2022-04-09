import React, { Component } from 'react';

import '../../styles/Home.css';

import ProjectPreview from '../ProjectPreview';


import previewData from '../../constants/homePreviewData';
import {allProjects} from '../../constants/projects';
import MeCard from '../Utils/MeCard';


export default (props) => {

    return <div className="homePageContainer fadeQuick">


        <div className='homeCardCenterer'>
            <MeCard/>
        </div>


    </div>


}


// class HomePage extends Component {

//     state = {

//     }

//     componentDidMount = () => {
        
//     }



//     render = () => {

//         return (

//             <div className="homePageContainer fadeQuick">


//                 {/* Project Group Links */}
//                 {allProjects.map( (projectGroup, pGIdx) => {

//                     const data = {
//                         title: projectGroup.groupName,
//                         text: projectGroup.groupDescription,
//                         imgPath: projectGroup.imgPath,
//                         link: '/portfolio/' + projectGroup.groupId,
//                     };

//                     return <ProjectPreview 
//                         data = {data}
//                     />

//                 } )}

//             </div>

//         )
//     }

// }

// export default HomePage;