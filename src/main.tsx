import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import worker from "@/mock/index.ts";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)

if (process.env.NODE_ENV === 'development') {
    worker.start()
}
