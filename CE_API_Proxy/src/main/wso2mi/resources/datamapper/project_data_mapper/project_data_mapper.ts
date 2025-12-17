import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* inputType : "JSON",
*/
interface Root {
    projects: {
        code: string
        title: string
        description: string
        type: string
        page_url: string
        api_url: string
    }[]
}

/*
* outputType : "JSON",
*/
interface OutputRoot {
    projects: {
        code: string
        title: string
        description: string
        type: string
        page_url: string
        api_url: string
    }[]
    totalProjects: number
}



/**
 * functionName : map_S_Root_S_Root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        projects: input.projects.map((projectItem) => {
            return {
                code: projectItem.code,
                title: projectItem.title,
                description: projectItem.description,
                type: projectItem.type,
                page_url: projectItem.page_url,
                api_url: projectItem.api_url
            };
        }),
        totalProjects: mapObjectArrayToNumber(input.projects)
    };
}

function mapObjectArrayToNumber(projects: Root["projects"]): number {
    return projects ? projects.length : 0;
}
