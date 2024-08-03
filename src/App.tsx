import {StyleProvider} from '@ant-design/cssinjs';
import {App as AntdApp, ConfigProvider, MenuProps} from "antd"
import './App.css'
import {Login} from '@/pages/login/Login'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()
function App() {

    return (
        <>
            <ConfigProvider>
                <StyleProvider hashPriority="high">
                    <QueryClientProvider client={queryClient}>
                        <AntdApp style={{width: '100%', height: '100%'}}>
                            <div style={{height: '100%'}}>
                                <Login/>
                            </div>
                        </AntdApp>
                    </QueryClientProvider>
                </StyleProvider>
            </ConfigProvider>

        </>
    )
}

export default App
