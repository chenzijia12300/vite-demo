export interface UserInfo {
    id: number
    username: string
    token: string
}

export interface Result<T = any> {
    status: number;
    message: string;
    data?: T;
}
