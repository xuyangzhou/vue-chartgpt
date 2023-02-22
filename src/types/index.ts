export type resContentType = {
    author: string;
    category: string;
    content: string;
    origin: string;
} | {
    code: number;
    content: string;
}

export type resTextType = {
    type: string;
    text: string;
}

export type resDataType = {
    code: string;
    data: {
        id: number;
        text: string;
    };
    msg: string;
}
export type responseType = resDataType | resTextType | resContentType;