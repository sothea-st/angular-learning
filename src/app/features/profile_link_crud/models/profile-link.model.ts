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

interface ProfileLinkDetail {
     id: number,
     profileLink: string
}
