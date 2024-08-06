import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {Result} from "@/types/entity.ts";
import {message} from "antd";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 60000,
})

axiosInstance.interceptors.request.use((config) => {
    console.log("请求头", config.headers)
    console.log("请求路径", config.url)
    return config
})

axiosInstance.interceptors.response.use(
    (response: AxiosResponse<Result>) => {
        const result = response.data
        console.log("成功信息",result)
        if (result.status == 200) {
            return result.data
        }
        return Promise.reject(result)
    },
    (error: AxiosError<Result>) => {
        console.log("错误信息",error.response)
        message.error(error.message)
    })
export const request = <T>(config: AxiosRequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .request<any, AxiosResponse<Result>>(config)
            .then((response: AxiosResponse<Result>) => {
                console.log("111")
                resolve(response as T)
            })
            .catch((e: Error | AxiosError) => {
                console.log(222)
                reject(e)
            })
    })
}

export const get = <T>(config: AxiosRequestConfig): Promise<T> => {
    return request({...config, method: 'get'})
}

export const post = <T>(config: AxiosRequestConfig): Promise<T> => {
    return request({...config, method: 'post'})
}


export default axiosInstance