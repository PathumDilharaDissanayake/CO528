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
* outputType : "JSON",
*/
interface OutputRoot {
    students: {
        batch: string
        count: number
        url: string
    }[]
    totalBatches: number
}


/**
 * functionName : map_S_Root_S_Root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        students: input.students.map((studentsItem) => {
            return {
                batch: studentsItem.batch,
                count: studentsItem.count,
                url: studentsItem.url
            };
        }),
        totalBatches: mapObjectArrayToNumber(input.students)
    };
}

function mapObjectArrayToNumber(students: Root["students"]): number {
    return students ? students.length : 0;
}

