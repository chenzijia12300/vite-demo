export interface UserInfo {
    id: number
    username: string
    password: string
}

export interface Result<T = any> {
    status: number;
    message: string;
    data?: T;
}
