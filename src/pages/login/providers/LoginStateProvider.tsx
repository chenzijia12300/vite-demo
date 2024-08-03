import {createContext, PropsWithChildren, useState} from "react";

export enum LoginState {
    LOGIN, REGISTER, QR_CODE
}

interface LoginStateContextType {
    loginState: LoginState;
    setLoginState: (state: LoginState) => void;
    backToLogin: () => void;
}

export const LoginStateContext = createContext<LoginStateContextType>({
    loginState: LoginState.LOGIN,
    setLoginState: () => {
    },
    backToLogin: () => {
    },
})

export function LoginStateProvider({children}: PropsWithChildren) {
    const [loginState, setLoginState] = useState(LoginState.LOGIN)

    function backToLogin() {
        setLoginState(LoginState.LOGIN);
    }

    return <LoginStateContext.Provider
        value={{loginState, setLoginState, backToLogin}}>{children}</LoginStateContext.Provider>
}