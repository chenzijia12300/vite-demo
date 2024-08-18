import {Layout, theme, Typography} from "antd";
import DashboardImage from "@/assets/images/dashboard.png"
import {LoginStateProvider} from "@/pages/login/providers/LoginStateProvider.tsx";
import {LoginFrom} from "@/pages/login/LoginFrom.tsx";
import Color from 'color'
import Overlay2 from "@/assets/images/overlay_2.jpg"

export function Login() {
    const {token} = theme.useToken()
    const gradientBg = Color(token.colorBgElevated).alpha(0.9).toString();
    const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`;
    return (
        /*
            flex: 启动弹性布局
            min-h-screen: 元素的最小高度为屏幕高度
            w-full: 设置元素的宽度为 100%
            flex-row: 主轴方向设置为水平 左到右
         */
        <Layout className="relative flex !min-h-screen !w-full !flex-row">
            {/*
                text-3xl: 设置文本的字体大小
                leading-normal: 设置文本的行高为正常值
                lg:text-4xl: 当视口宽度达到 lg（大屏幕）断点时，文本的字体大小变为 4xl

            */}
            <div
                className="hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex"
                style={{background: bg}}
            >
                <div className="text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl">Orange Add</div>
                <img className="max-w-[480px]" src={DashboardImage} alt=""/>
                <Typography.Text className="flex flex-row gap-[16px] text-2xl">
                    OrangeAdd的小窝
                </Typography.Text>
            </div>
            <div className="m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]">
                <LoginStateProvider>
                    <LoginFrom/>
                </LoginStateProvider>
            </div>
        </Layout>
    )
}