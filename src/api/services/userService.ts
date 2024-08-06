import {post} from "@/api/apiClient.ts";
import {UserInfo} from "@/types/entity.ts";

export enum UserApi {
    Login = '/login',
    Register = '/register',
}

export interface LoginRequest {
    username: string;
    password: string;
}

class UserService {
    Login = (data: LoginRequest) => post<UserInfo>({url: UserApi.Login,data})
}

export default new UserService()
