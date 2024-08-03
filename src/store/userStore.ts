import {UserInfo} from "../types/entity";
import {create} from "zustand";
import {getItem} from "../utils/storage";
import {StorageEnum} from "../types/enum";

type UserStore = {
    userInfo:UserInfo
    actions:{
        setUserInfo:(userInfo:UserInfo) => void
    }
}

const useUserStore = create<UserStore>((set=>({
    userInfo:getItem(StorageEnum.USER),
    actions:{
        setUserInfo:(userInfo:UserInfo) => {
            set({userInfo:userInfo})
        }
}
})))

export const useUserInfo = () => useUserStore((state)=>state.userInfo)
export const useUserActions = () => useUserStore(state=>state.actions)