
import React from "react";

export default [
    {
        title : 'MAIA_01',
        properties : [ 
            {key: 'Project', value: 'MAIA_01'}, 
            {key: 'Languages', value: 'C++, Python'}, 
            {key: 'Github', value: 'Private (contact for code samples).'} 
        ],
        description : 'The MAIA_01 is a software and hardware synthesizer, aiming to help musicians discover new sounds by visual conversion to audio tones. The MAIA_01 seeks to use AI to unlock a variety of sounds in vastly customizable ways.',
        image : '/resources/Backgrounds/Synth.jpg',
    },

    {
        title : 'SecondNames',
        properties : [ 
            {key: 'Project', value: 'SecondNames'}, 
            {key: 'Languages', value: 'Javascript (Mongo, Express, React, Node, Docker)'}, 
            {key: 'Github', value: 'Private (contact for code samples).'} 
        ],
        description : 'SecondNames is a web journal that seeks to publish translations in fiction, poetry, and nonfiction, as well as cultural criticism, and general musings on art. On a technical level, the journal hopes to connect new writers with translators, in order to proliferate the number of important voices transcending the language barrier.',
        video : '/resources/SecondNames.mp4',
    },

]


export const allProjects = [

    // Software Group
    {
        groupId: 'software',
        groupName: 'Software Projects',
        groupDescription: 'TODO @Marcel',
        imgPath: '/resources/Backgrounds/Hubble.jpg',

        projects: [

            // Ayisen Audio
            {
                // Proj Meta
                pId: 'ayisen',
                projectName: 'Ayisen Audio LLC.',
                projectHeadTitle: 'Visually inovative instruments',

                description: 'A music technology company, focused on providing musicians with interfaces to explore sound within new visual and conceptual spaces.',

                pageDescription: <div>
                    <p>
                        Ayisen is a music technology company, focused on providing interfaces that allow musicians to see and create music in new ways. 
                    </p>
                </div>,


                externalLink: 'https://ayisen.com',
                internalLink: '/projects/ayisen',
                spotlight: true,

                // Images
                bannerImg: '/resources/Projects/Ayisen/BannerImg.jpg',
                thumbnailImg: "/resources/Projects/Ayisen/Thumbnail.jpg",

                // Info sections
                infoSections: [
                
                ],

            },

            // Ayisen :: Fidget
            {
                // Proj Meta
                pId: 'ayisen-fidget',
                projectName: 'Ayisen :: Fidget',
                projectHeadTitle: 'Some fun online toys to play with :)',

                description: 'A series of online toys, exploring symetry, fun, and emergent properties of free simulations.',
                pageDescription: <div>
                    <p>
                        A set of online 2d, interacted spaces, exploring symetry, fun, and emergent properties of free simulations.
                    </p>
                    <p>
                        Take a peek around! Relieve some stess, try soemthing fun :)
                    </p>
                </div>,


                externalLink: 'https://fidget.ayisen.com',
                spotlight: true,

                // Images
                bannerImg: '/resources/Projects/AyisenFidget/Thumbnail.jpg',
                thumbnailImg: "/resources/Projects/AyisenFidget/Thumbnail.jpg",

                // Info sections
                infoSections: [
                
                ],

            },

            // Observer 01
            {
                // Proj Meta
                pId: 'observer_01',
                projectName: 'Ayisen :: Observer_01',
                projectHeadTitle: 'Rotation based audio sequencing engine.',

                description: 'Observer_01 is a digital instrument, allowing musicians and producers to generate rhythms and dynamic music using the relationshipt between rotating polygons.',
                externalLink: 'https://ayisen.com',
                spotlight: true,

                thumbnailImg: "/resources/Projects/Observer_01/Thumbnail.jpg",
                bannerImg: "/resources/Projects/Observer_01/BannerImg.jpg",

                // Info sections
                infoSections: [
                
                ],
            },

            // 3D Wavetable Synth
            {
                // Proj Meta
                pId: 'wavetable_3d',
                projectName: 'Ayisen :: 3D Wavetable Synthesizer',
                projectHeadTitle: 'A 3D wavetable synthesizer developed in C++',

                description: 'A 3D wavetable synthesizer built from scratch.',
                // externalLink: 'https://ayisen.com',
                spotlight: true,

                thumbnailImg: "/resources/Projects/3DWavetableSynth/Thumbnail.jpg",
                bannerImg: "/resources/Projects/3DWavetableSynth/Thumbnail.jpg",

                // Info sections
                infoSections: [
                
                ],
            },

            // Legrosports
            // {
            //     externalLink: 'http://legrosports.com'
            // },

            // NoFoLeg
            {
                // Proj Meta
                pId: 'nf_design_studio',
                projectName: 'NF Design Studio Site',
                projectHeadTitle: 'Art, CAD/Surverying, Interior Design, and Photography custom website.',

                description: 'Art, CAD/Surverying, Interior Design, and Photography custom website.',
                externalLinks: ['http://nfdesignstudio.com/'],
                spotlight: true,

                thumbnailImg: "/resources/Projects/NoFoLeg/BannerImg.jpg",
                bannerImg: "/resources/Projects/NoFoLeg/BannerImg.jpg",

                // Info sections
                infoSections: [
                
                ],
            },

        ],
    },

    // Publications Group
    {
        groupId: 'writing',
        groupName: 'Publications',
        groupDescription: 'Published poetry, prose, and essays.',
        imgPath: '/resources/Backgrounds/Spires1.jpg',

        projects: [

        ],

    },

    // Research Group
    {
        groupId: 'research',
        groupName: 'Research',
        groupDescription: 'TODO @Marcel',
        imgPath: '/resources/Backgrounds/Hubble.jpg',

        projects: [

            // Dark Matter Research
            {
                // Proj Meta
                pId: 'dark-matter',
                projectName: 'Data Analysis :: Dark Matter',
                projectHeadTitle: 'Undergraduate Research on Dark Matter in Dwarf Galaxies',

                description: 'Undergraduate Research on Dark Matter in Dwarf Galaxies. Used python to examine, and distill properties of Dark Matter within Dwarf Galaxies.',
                spotlight: true,

                // Images
                bannerImg: '/resources/Projects/DarkMatter/Thumbnail.jpg',
                thumbnailImg: "/resources/Projects/DarkMatter/Thumbnail.jpg",

                // Info sections
                infoSections: [
                
                ],

            },

        ],
    }




];



export const getProjById = (projectId) => {

    // Search for project 
    for (let group of allProjects) {

        for (let project of group.projects) {

            if (project.pId === projectId)
                return project
        }

    }

    return null;

}


