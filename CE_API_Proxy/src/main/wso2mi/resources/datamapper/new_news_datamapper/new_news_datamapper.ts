import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    data: {
        id: number
        title: string
        description: string
        url: string
        author: string
        image: string
        link_url: string
        link_caption: string
        published_at: string
        created_at: string
        updated_at: string
    }[]
    links: {
        first: string
        last: string
        prev: string
        next: string
    }
    meta: {
        current_page: number
        from: number
        last_page: number
        links: {
            url: string
            label: string
            active: boolean
        }[]
        path: string
        per_page: number
        to: number
        total: number
    }
}


/*
* title : "root",
* outputType : "JSON",
*/
interface Root {
    data: {
        id: number
        title: string
        description: string
        url: string
        author: string
        image: string
        link_url: string
        link_caption: string
        published_at: string
        created_at: string
        updated_at: string
    }[]
    links: {
        first: string
        last: string
        prev: string
        next: string
    }
    meta: {
        current_page: number
        from: number
        last_page: number
        links: {
            url: string
            label: string
            active: boolean
        }[]
        path: string
        per_page: number
        to: number
        total: number
    }
}


/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): Root {
    return {
        data: input.data,
        links: input.links,
        meta: input.meta
    }
}

