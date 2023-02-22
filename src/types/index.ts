export type resPoetryType = {
    code: number;
    data: {
        author: string;
        category: string;
        contents: string;
        origin: string;
    }

}
export type resContentType = {
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
export type responseType = resPoetryType | resDataType | resTextType | resContentType;