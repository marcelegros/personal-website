

export interface ProjectStoryPhase {

    title: string,
    description?: JSX.Element,
    preDescription?: JSX.Element,
    imageGallery: string[],
    videoGallery: string[],
    stack?: string[],
    iframeLink?: string,

};

export interface Project {

    // Project Id
    pId: string,

    // Project Name, and Header
    projectName: string,
    projectHeadTitle: string,

    // Main Description 
    description: string,

    // Page Description
    pageDescription?: JSX.Element,

    productStory: ProjectStoryPhase[],

    
    // Links 
    externalLink?: string,

    // Images
    bannerImg: string,
    thumbnailImg: string,

    // Stack
    stack: string[],
    role: string[],

    noPage?: boolean,

}

export interface ProjectGroup {

    groupId: string,
    groupName: string,

    projects: Project[],

}

export interface AllProjects {


}