

export interface ProjectStoryPhase {

    title: string,
    description: JSX.Element,
    imageGallery: string[],
    videoGallery: string[],

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
    pageDescription: JSX.Element,

    productStory: ProjectStoryPhase[],

    
    // Links 
    externalLink?: string,

    // Images
    bannerImg: string,
    thumbnailImg: string,

    // Stack
    stack: string[],

}

export interface ProjectGroup {

    groupId: string,
    groupName: string,

    projects: Project[],

}

export interface AllProjects {


}