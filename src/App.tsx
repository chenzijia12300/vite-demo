import {StyleProvider} from '@ant-design/cssinjs';
import {App as AntdApp, ConfigProvider} from "antd"
import {Login} from '@/pages/login/Login'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <ConfigProvider>
                <StyleProvider hashPriority="high">
                    <QueryClientProvider client={queryClient}>
                        <AntdApp>
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
