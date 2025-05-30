export interface ProfileLinkModel {
     status: number,
     msg: string,
     data: ProfileLinkDetail[],
     count: number
}

export interface ProfileLinkUpdateModel {
     status: number,
     msg: string,
     data: ProfileLinkDetail
}

export interface Success {
     status: number,
     msg: string
}

export interface ProfileLinkDetail {
     id: number,
     profileLink: string
}

export interface ProfileLinkRequest {
     profileLink: string;
}

