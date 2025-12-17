import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* inputType : "JSON",
*/
interface Root {
    events: {
        id: number
        title: string
        description: string
        url: string
        author: string
        image: string
        start_at: string
        end_at: (string | null)
        event_type: string[]
        location: string
        link_url: (string | null)
        link_caption: (string | null)
        published_at: string
        created_at: string
        updated_at: string
    }[]
}

/*
* outputType : "JSON",
*/
interface OutputRoot {
    events: {
        id: number
        title: string
        description: string
        url: string
        author: string
        image: string
        start_at: string
        end_at: (string | null)
        event_type: string[]
        location: string
    }[]
    totalEvents: number
}



/**
 * functionName : map_S_Root_S_Root
 * inputVariable : inputRoot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        events: input.events.map((eventItem) => {
            return {
                id: eventItem.id,
                title: eventItem.title,
                description: eventItem.description,
                url: eventItem.url,
                author: eventItem.author,
                image: eventItem.image,
                start_at: eventItem.start_at,
                end_at: eventItem.end_at,
                event_type: eventItem.event_type,
                location: eventItem.location
            };
        }),
        totalEvents: mapObjectArrayToNumber(input.events)
    };
}

function mapObjectArrayToNumber(events: Root["events"]): number {
    return events ? events.length : 0;
}
