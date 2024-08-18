import {createBrowserRouter, RouteObject, RouterProvider, useNavigate} from "react-router-dom";
import {Login} from "@/pages/login/Login.tsx";
import React, {useCallback, useEffect, useMemo} from "react";
import {useUserInfo} from "@/store/userStore.ts";
import {ErrorBoundary} from "react-error-boundary";


type Props = {
    children: React.ReactNode;
};

export function AuthGuard({children}: Props) {
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    const router = useMemo(
        () => ({
            back: () => navigate(-1),
            forward: () => navigate(1),
            reload: () => window.location.reload(),
            push: (href: string) => navigate(href),
            replace: (href: string) => navigate(href, {replace: true}),
        }),
        [navigate],
    );
    const check = useCallback(() => {
        if (!userInfo) {
            router.replace('/login');
        }
    }, [userInfo]);

    useEffect(() => {
        check();
    }, [check]);

    return <ErrorBoundary>{children}</ErrorBoundary>;
}

export default function Router() {
    const loginRouter = [
        {
            path: "/login",
            element: <Login/>
        }
    ]
    const rootRouter = {
        path: "/",
        element: (
            <AuthGuard>
                <div>
                    Hello World!
                </div>
            </AuthGuard>
        )
    }
    const routers = [rootRouter, ...loginRouter]
    return <RouterProvider router={createBrowserRouter(routers as RouteObject[])}/>
}