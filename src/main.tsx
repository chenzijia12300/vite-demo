import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import worker from "@/mock/index.ts";
// tailwind css
import './theme/index.css';
import React from 'react';
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

if (process.env.NODE_ENV === 'development') {
    worker.start()
}
