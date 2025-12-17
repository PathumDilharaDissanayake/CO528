import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    title: string
    venue: string
    year: number
    abstract: string
    authors: string[]
    author_info: {
        type: string
        id: string
        name: string
        email: string
        profile_image: string
        profile_url: string
    }[]
    doi: string
    is_dept_affiliated: boolean
    preprint_url: string
    pdf_url: string
    presentation_url: string
    project_url: string
    codebase: string
    research_groups: string[]
    tags: string[]
    funding: string
    api_url: string
    submitted: string
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    title: string
    venue: string
    year: number
    abstract: string
    authors: string[]
    author_info: {
        type: string
        id: string
        name: string
        email: string
        profile_image: string
        profile_url: string
    }[]
    doi: string
    is_dept_affiliated: boolean
    preprint_url: string
    pdf_url: string
    presentation_url: string
    project_url: string
    codebase: string
    research_groups: string[]
    tags: string[]
    funding: string
    api_url: string
    submitted: string
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root[]): OutputRoot[] {
    return input
}

