
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
                        title: "Web Front-End", 
                        description: <div>
                            <p> The Ayisen Web-UI serves to provide users with the ability to browse and purchase Products & Add-Ons, as well as manage their account.</p>
                            <p>It is comprised of the following components, which communciate with our public REST API: 
                                <li>
                                    <b>Prouct browsing & cart</b>, with integrated checkout.
                                </li>
                                <li>
                                    <b>Payment processing </b> via Stripe.
                                </li>
                                <li>
                                    <b>Account settings page </b>for managing user infromation.
                                </li>
                                <li>
                                    <b>"My Products" dashboard</b> for managing products & licenses.
                                </li>
                                <li>
                                    <b>Dynamic price and sale fetching</b> from Stripe.
                                </li>

                            </p>
                        </div>,
                        imageGallery: ['/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg'],
                        videoGallery: [],
                        stack: ["React", "Docker"]
                    },

                    {
                        title: "Express JS Backend", 
                        description: <div>
                            <p> The Ayisen API is an Express API (running wiht MongoDB), which serves the following purposes for Ayisen's customers:
                                <li>
                                    <b>Authentication:</b> Account / cookie based authentication.
                                </li>
                                <li>
                                    <b>Prurchase fulfillment</b> via Webhooks.
                                </li>
                                <li>
                                    <b>Product Management: </b>Management of user purchased products.
                                </li>
                                <li>
                                    <b>Copy Protected Registration: </b>Registration of user's purchased products, via KeyFile encryption and communication with C++ product instances.
                                </li>
                                <li>
                                    <b>Internal email alerts (AWS SES)</b> for errors thrown in the purchase pipeline.
                                </li>
                                <li>
                                    <b>User emailing (AWS SES)</b> for password resetting and email verification.
                                </li>

                            </p>
                        </div>,
                        imageGallery: [],
                        videoGallery: [],
                        stack: ["Express Js", 'Stripe', "AWS SES", "Docker", "AWS S3", "MongoDB"]
                    },

                    {
                        title: "Internal-Web-Portal", 
                        description: <div>
                            <p> The Ayisen Internal-Web-Portal allows members of the Ayisen team to easily manage versions, and deploy additional products to users as needed.</p>
                            <p>It is comprised of the following components, which communciate with our private internal REST API: 
                                <li>
                                    <b>Product version deployments</b>
                                </li>
                                <li>
                                    <b>Product version updates</b>
                                </li>
                                <li>
                                    <b>Product version "upload files for each os."</b>
                                </li>
                                <li>
                                    <b>Product Utilites,</b> for executing scripts to send instances to users, generating serial numbers, etc.
                                </li>

                            </p>
                        </div>,
                        imageGallery: ['/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg','/resources/Projects/Ayisen/BannerImg.jpg'],
                        videoGallery: [],
                        stack: ["React", "Docker"],
                    },

                    {
                        title: "Internal-API", 
                        description: <div>
                            <p> The Ayisen API is an Express API (running wiht MongoDB), which serves the following purposes for Ayisen's internal uses:
                                <li>
                                    <b>Deploying new product versions</b> 
                                </li>
                                <li>
                                    <b>Uploading product version downloadables to S3</b>
                                </li>
                                <li>
                                    <b>Deploying new product instances to users.</b>
                                </li>

                            </p>
                        </div>,
                        imageGallery: [],
                        videoGallery: [],
                        stack: ["Express Js", 'Stripe', "Docker", "AWS S3", "MongoDB"]
                    },
                ],


                externalLink: 'https://ayisen.com',

                // Images
                bannerImg: '/resources/Projects/Ayisen/BannerImg.jpg',
                thumbnailImg: "/resources/Projects/Ayisen/Thumbnail.jpg",

                stack: [
                    "React", 
                    "Typescript", 
                    "Express Js", 
                    "Jest",
                    "MongoDB", 
                    "C++", 
                    "Docker",
                    "Stripe",
                    "AWS SES",
                    "AWS S3",
                ],
                role: [
                    "Co-Founder",
                    "Lead Developer",
                    "Lead Systems Engineer"
                ]

            },


            // Ayisen :: Fidget
            {
                // Proj Meta
                pId: 'ayisen-fidget',
                projectName: 'Ayisen :: Fidget',
                projectHeadTitle: 'Some fun online toys to play with :)',

                description: 'A series of online toys, exploring symetry, fun, and emergent properties of free simulations.',

                productStory: [

                    {
                        title: "Playing the Game",
                        description: <div>
                            <p>
                                Ayisen Fidget is a set of online 2d, interacted spaces, exploring symetry, fun, and emergent properties of free simulations.
                            </p>
                            <p>
                                Try it, by fiddling around in the window below! :)
                            </p>
                            <p style={{opacity: 0.4}}>
                                Hint: Click, drag, navigate the menu in top right
                            </p>
                        </div>,
                        imageGallery: [
                            // "/resources/Projects/AyisenFidget/Bubbles1.png",
                            // "/resources/Projects/AyisenFidget/Spider1.png"
                        ],
                        videoGallery: [],
                        iframeLink: "https://fidget.ayisen.com",
                    },

                ],


                externalLink: 'https://fidget.ayisen.com',

                // Images
                bannerImg: '/resources/Projects/AyisenFidget/Thumbnail.jpg',
                thumbnailImg: "/resources/Projects/AyisenFidget/Thumbnail.jpg",

                stack: [
                    "React", 
                    "Typescript",
                    "Docker",
                ],
                role: [
                    "Lead Developer",
                    "Designer / Content Creator"
                ]

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
                    "C++", 
                    "Juce"
                ],

                role: [
                    "Lead Developer",
                    "Lead Systems Engineer",
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


                stack: [
                    "C++", "opengl"
                ],

                role: [
                    "Lead Developer",
                    "Lead Systems Engineer"
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
                    {
                        title: "The Project",
                        description: <div>
                            <p>NF Design Studio is a website custom build for Noelle Fontaine, in order to exhibit</p>
                            <li>
                                Artwork
                            </li>
                            <li>
                                CAD Rendering Services
                            </li>
                            <li>
                                Photography
                            </li>
                            <li>
                                Interior Design
                            </li>
                        </div>,
                        imageGallery: [],
                        videoGallery: [],
                    }
                ],


                stack: [
                    "React",
                    "Javascript",
                    "Docker"
                ],

                role: [
                    "Sole Developer",
                ],

                externalLink: 'https://nfdesignstudio.com/',
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


                stack: ['Python'],

                role: [
                    "Researcher"
                ]

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


