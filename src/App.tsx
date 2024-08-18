import {StyleProvider} from '@ant-design/cssinjs';
import {App as AntdApp, ConfigProvider} from "antd"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Router from "@/router";

const queryClient = new QueryClient()

function App() {

    return (
        <>
            <ConfigProvider>
                <StyleProvider hashPriority="high">
                    <QueryClientProvider client={queryClient}>
                        <AntdApp>
                            <div style={{height: '100%'}}>
                                <Router/>
                            </div>
                        </AntdApp>
                    </QueryClientProvider>
                </StyleProvider>
            </ConfigProvider>

        </>
    )
}

export default App
