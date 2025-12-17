import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* inputType : "JSON",
*/
interface Root {

}


/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    newsItems: {
        id: number
        title: string
        description: string
        author: string
        url: string
        image: string
        publishedAt: string
    }[]
}


/**
 * functionName : map_S_Root_S_root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
	return {}
}

