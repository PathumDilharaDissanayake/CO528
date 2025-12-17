import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* inputType : "JSON",
*/
interface Root {
    students: {
        batch: string
        url: string
        count: number
    }[]
}


/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    E02: {
        batch: string
        url: string
        count: number
    }
    e02a: {
        batch: string
        url: string
        count: number
    }
    E04: {
        batch: string
        url: string
        count: number
    }
    E05: {
        batch: string
        url: string
        count: number
    }
    E06: {
        batch: string
        url: string
        count: number
    }
    E07: {
        batch: string
        url: string
        count: number
    }
    E08: {
        batch: string
        url: string
        count: number
    }
    E10: {
        batch: string
        url: string
        count: number
    }
    E11: {
        batch: string
        url: string
        count: number
    }
    E12: {
        batch: string
        url: string
        count: number
    }
    E13: {
        batch: string
        url: string
        count: number
    }
    E14: {
        batch: string
        url: string
        count: number
    }
    E15: {
        batch: string
        url: string
        count: number
    }
    E16: {
        batch: string
        url: string
        count: number
    }
    E17: {
        batch: string
        url: string
        count: number
    }
    E18: {
        batch: string
        url: string
        count: number
    }
    E19: {
        batch: string
        url: string
        count: number
    }
    E20: {
        batch: string
        url: string
        count: number
    }
    E21: {
        batch: string
        url: string
        count: number
    }
    E22: {
        batch: string
        url: string
        count: number
    }
    E23: {
        batch: string
        url: string
        count: number
    }
    E96: {
        batch: string
        url: string
        count: number
    }
    E97: {
        batch: string
        url: string
        count: number
    }
    E99: {
        batch: string
        url: string
        count: number
    }
}


/**
 * functionName : map_S_Root_S_root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
    return {}
}

hema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "students": { "type": "array", "items": { "type": "object", "properties": { "batch": { "type": "string" }, "count": { "type": "integer" }, "url": { "type": "string" } } } }, "totalBatches": { "type": "integer" } } }
}

