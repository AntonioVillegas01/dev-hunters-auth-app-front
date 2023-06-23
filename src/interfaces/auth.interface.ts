export interface TProfile {
    userId: string;
    username: string;
    role: string;
    permissions: string[];
}

export interface TLoginResponse {
    access_token: string;
    refresh_token: string;
}
