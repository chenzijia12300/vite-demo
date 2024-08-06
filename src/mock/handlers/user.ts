import {http, HttpResponse} from "msw";
import {UserApi} from "@/api/services/userService.ts";

const USER_LIST = [
    {
        id: '20240101',
        username: 'root',
        password: 'root',
    }
]

const userLogin = http.post(`/api${UserApi.Login}`, async ({request}) => {
    const result = await request.json()
    // @ts-ignore

    const {username, password} = result
    console.log("mock",result)
    const user = USER_LIST.find((item) => item.username == username)
    if (!user || user.password != password) {
        return HttpResponse.json({
            status: 500,
            message: "用户名或者密码错误"
        })
    }
    return HttpResponse.json({
        status: 200,
        data: user
    })
})

export default [userLogin]
