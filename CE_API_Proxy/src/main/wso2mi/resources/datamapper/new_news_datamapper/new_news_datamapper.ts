import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    $schema: string
    type: string
    properties: {
        data: {
            type: string
            items: {
                type: string
                properties: {
                    id: {
                        type: string
                    }
                    title: {
                        type: string
                    }
                    description: {
                        type: string
                    }
                    url: {
                        type: string
                    }
                    author: {
                        type: string
                    }
                    image: {
                        type: string
                    }
                    published_at: {
                        type: string
                    }
                    created_at: {
                        type: string
                    }
                    updated_at: {
                        type: string
                    }
                }
                required: string[]
            }
        }
    }
    required: string[]
}


/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    $schema: string
    type: string
    properties: {
        newsArticles: {
            type: string
            items: {
                type: string
                properties: {
                    articleId: {
                        type: string
                    }
                    headline: {
                        type: string
                    }
                    summary: {
                        type: string
                    }
                    coverImage: {
                        type: string
                    }
                    publishedDate: {
                        type: string
                    }
                }
                required: string[]
            }
        }
    }
    required: string[]
}


/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
// export function mapFunction(input: Root): OutputRoot {
//     return {
//         required: input.required,
//         properties: {
//             newsArticles: input.properties.data
//         },
//         type: input.type
//     }
// }

/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    // We are returning a structure that matches OutputRoot
    return {
        $schema: "http://json-schema.org/draft-04/schema#",
        type: "object",
        required: ["newsArticles"],
        properties: {
            newsArticles: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        articleId: { type: "string" },
                        headline: { type: "string" },
                        summary: { type: "string" },
                        coverImage: { type: "string" },
                        publishedDate: { type: "string" }
                    },
                    required: ["articleId", "headline"]
                }
            }
        }
    };
}