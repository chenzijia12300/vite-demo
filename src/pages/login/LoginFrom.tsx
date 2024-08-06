import {useContext, useState} from "react";
import {LoginState, LoginStateContext} from "@/pages/login/providers/LoginStateProvider.tsx";
import {Button, Form, Input, message} from "antd";
import UserService, {LoginRequest} from "@/api/services/userService.ts";

export function LoginFrom() {
    const [loading, setLoading] = useState(false)
    const {loginState} = useContext(LoginStateContext)
    const [messageApi, contextHolder] = message.useMessage()
    if (loginState !== LoginState.LOGIN) {
        return null
    }
    const handleFinish = async (req: LoginRequest) => {
        setLoading(true)
        try {
            const result = await UserService.Login(req);
            messageApi.success(`登录成功${result.username}`)
            console.log("success", result)
        } catch (err) {
            messageApi.error(err.message)
        }
        setLoading(false)
    }
    return (
        <>
            {contextHolder}
            <div className="mb-4 text-2xl font-bold xl:text-3xl">登录</div>
            <Form name="login" size="large" onFinish={handleFinish}>
                <Form.Item name="username" required={true} rules={[{required: true, message: "用户名不能为空"}]}>
                    <Input placeholder={"用户名"}/>
                </Form.Item>
                <Form.Item name="password" required={true} rules={[{required: true, message: "密码不能为空"}]}>
                    <Input.Password type={"password"} placeholder={"密码"}/>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"} className={"w-full"} loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}