

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
                description: 'TODO @Marcel',
                imgPath: '/resources/Backgrounds/Spires1.jpg',
                externalLink: 'https://ayisen.com',
                internalLink: '/projects/ayisen',
                spotlight: true,

                // Info sections
                infoSections: [
                
                ],

            },

            // Observer 01
            {
                // Proj Meta
                pId: 'observer_01',
                projectName: 'Observer_01',
                description: 'TODO @Marcel',
                imgPath: '/resources/Backgrounds/Spires1.jpg',
                externalLink: 'https://ayisen.com',
                spotlight: true,

                // Info sections
                infoSections: [
                
                ],
            },

            // Legrosports
            {
                externalLink: 'http://legrosports.com'
            },

            // NoFoLeg
            {
                // Proj Meta
                pId: 'nf_design_studio',
                projectName: 'NF Design Studio Site',
                description: 'TODO @Marcel',
                imgPath: '/resources/Backgrounds/Spires1.jpg',
                externalLink: 'http://nfdesignstudio.com/',
                spotlight: true,

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
                
            },

        ],
    }




];



