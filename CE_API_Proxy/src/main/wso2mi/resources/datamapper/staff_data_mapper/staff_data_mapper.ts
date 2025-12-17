import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* inputType : "JSON",
*/
interface Root {
    staff: {
        email: string
        name: string
        url: string
        designation: string
    }[]
}

/*
* outputType : "JSON",
*/
interface OutputRoot {
    staff: {
        name: string
        url: string
        designation: string
    }[]
    totalStaff: number
}



/**
 * functionName : map_S_Root_S_Root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        staff: input.staff.map((staffItem) => {
            return {
                name: staffItem.name,
                url: staffItem.url,
                designation: staffItem.designation
            };
        }),
        totalStaff: mapObjectArrayToNumber(input.staff)
    };
}

function mapObjectArrayToNumber(staff: Root["staff"]): number {
    return staff ? staff.length : 0;
}
