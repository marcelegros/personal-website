
import React from "react";
import { ProjectGroup } from "./types";


export const allProjects: ProjectGroup[] = [

    // Software Group
    {
        groupId: 'software',
        groupName: 'Software Projects',

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

                productStory: [

                    {
                        title: "Role",
                        description: <div>
                            <li>
                                <b>Co-Founder</b>
                            </li>
                            <li>
                                <b>Lead Developer</b>
                            </li>
                            <li>
                                <b>Software Architect</b>
                            </li>
                            <li>
                                <b>IT / Infrastructure Engineer</b>
                            </li>
                        </div>,
                        imageGallery: [],
                        videoGallery: []
                    },

                    {
                        title: "Web Front-End", 
                        description: <div>
                            <p> The Ayisen Web-UI serves to provide users with the ability to browse and purchase Products & Add-Ons, as well as manage their account.</p>
                            <p>Via connections to the API, it performs
                                <li>
                                    <b>Payment processing </b> via Stripe.
                                </li>
                                <li>
                                    <b>Purchased product management </b>via internal dashboard.
                                </li>
                                <li>
                                    <b>Dynamic price and sale fetching</b> from Stripe.
                                </li>

                            </p>
                        </div>,
                        imageGallery: ['/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg'],
                        videoGallery: [],
                    },

                    {
                        title: "Express JS Backend", 
                        description: <div>
                            <p> The Ayisen API is an Express API (running wiht MongoDB), which serves the following purposes for Ayisen's customers:
                                <li>
                                    <b>Authentication:</b> Account / cookie based authentication.
                                </li>
                                <li>
                                    <b>Product Management: </b>Management of user purchased products.
                                </li>
                                <li>
                                    <b>Copy Protected Registration: </b>Registration of user's purchased products, via KeyFile encryption and communication with C++ product instances.
                                </li>

                            </p>
                        </div>,
                        imageGallery: [],
                        videoGallery: [],
                    },
                ],


                externalLink: 'https://ayisen.com',

                // Images
                bannerImg: '/resources/Projects/Ayisen/BannerImg.jpg',
                thumbnailImg: "/resources/Projects/Ayisen/Thumbnail.jpg",

                stack: ["React", "Typescript", "Express Js", "MongoDB", "C++", ]

            },


            // Ayisen :: Fidget
            {
                // Proj Meta
                pId: 'ayisen-fidget',
                projectName: 'Ayisen :: Fidget',
                projectHeadTitle: 'Some fun online toys to play with :)',

                description: 'A series of online toys, exploring symetry, fun, and emergent properties of free simulations.',
                pageDescription: <div>
                    
                </div>,

                productStory: [

                    {
                        title: "Playing the Game",
                        description: <div>
                            <p>
                                Ayisen Fidget is a set of online 2d, interacted spaces, exploring symetry, fun, and emergent properties of free simulations.
                            </p>
                            <p>
                                Take a peek around! Relieve some stess, try soemthing fun :)
                            </p>
                        </div>,
                        imageGallery: [
                            "/resources/Projects/AyisenFidget/Bubbles1.png",
                            "/resources/Projects/AyisenFidget/Spider1.png"
                        ],
                        videoGallery: [],
                    },

                    {
                        title: "Role",
                        description: <div>
                            <li>
                                <b>Developer</b>
                            </li>
                            <li>
                                <b>Designer / Content Creator</b>
                            </li>
                        </div>,
                        imageGallery: [],
                        videoGallery: []
                    }

                ],


                externalLink: 'https://fidget.ayisen.com',

                // Images
                bannerImg: '/resources/Projects/AyisenFidget/Thumbnail.jpg',
                thumbnailImg: "/resources/Projects/AyisenFidget/Thumbnail.jpg",

                stack: ["React", "Javascript"],

            },

            // Observer 01
            {
                // Proj Meta
                pId: 'observer_01',
                projectName: 'Ayisen :: Observer_01',
                projectHeadTitle: 'Rotation based audio sequencing engine.',

                description: 'Observer_01 is a digital instrument, allowing musicians and producers to generate rhythms and dynamic music using the relationshipt between rotating polygons.',
                externalLink: 'https://ayisen.com',

                thumbnailImg: "/resources/Projects/Observer_01/Thumbnail.jpg",
                bannerImg: "/resources/Projects/Observer_01/BannerImg.jpg",

                pageDescription: <div>"TODO @Marcel"</div>,

                // Info sections
                productStory: [
                
                ],

                stack: [
                    "C++", "Juce"
                ]
            },

            // 3D Wavetable Synth
            {
                // Proj Meta
                pId: 'wavetable_3d',
                projectName: 'Ayisen :: 3D Wavetable Synthesizer',
                projectHeadTitle: 'A 3D wavetable synthesizer developed in C++',

                description: 'A 3D wavetable synthesizer built from scratch.',
                // externalLink: 'https://ayisen.com',

                thumbnailImg: "/resources/Projects/3DWavetableSynth/Thumbnail.jpg",
                bannerImg: "/resources/Projects/3DWavetableSynth/Thumbnail.jpg",

                // Info sections
                productStory: [
                
                ],

                pageDescription: <div></div>,

                stack: [
                    "C++", "opengl"
                ]
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

                thumbnailImg: "/resources/Projects/NoFoLeg/BannerImg.jpg",
                bannerImg: "/resources/Projects/NoFoLeg/BannerImg.jpg",

                // Info sections
                productStory: [
                
                ],

                pageDescription: <div></div>,

                stack: [
                    "React"
                ]
            },

        ],
    },

    // Publications Group
    {
        groupId: 'writing',
        groupName: 'Publications',

        projects: [

        ],

    },

    // Research Group
    {
        groupId: 'research',
        groupName: 'Research',

        projects: [

            // Dark Matter Research
            {
                // Proj Meta
                pId: 'dark-matter',
                projectName: 'Data Analysis :: Dark Matter',
                projectHeadTitle: 'Undergraduate Research on Dark Matter in Dwarf Galaxies',

                description: 'Undergraduate Research on Dark Matter in Dwarf Galaxies. Used python to examine, and distill properties of Dark Matter within Dwarf Galaxies.',

                // Images
                bannerImg: '/resources/Projects/DarkMatter/Thumbnail.jpg',
                thumbnailImg: "/resources/Projects/DarkMatter/Thumbnail.jpg",

                // Info sections
                productStory: [
                
                ],

                pageDescription: <div></div>,

                stack: ['Python'],

            },

        ],
    }




];



export const getProjById = (projectId: string) => {

    // Search for project 
    for (let group of allProjects) {

        for (let project of group.projects) {

            if (project.pId === projectId)
                return project
        }

    }

    return null;

}


