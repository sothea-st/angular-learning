export interface TrackUserModel {
     totalUrlPost: number;
     urlPost: TrackUserInFoModel[];
}

interface TrackUserInFoModel {
     status: string;
     account_name: string;
     posts: string;
     url: string;
}