// This represents each post inside the array
export interface UserPost {
  status: string;
  account_name: string;
  posts: string;
  url?: string;
}

// This represents the whole API response
export interface UserResponse {
  Total_Post: number;
  Posts: UserPost[];
}
