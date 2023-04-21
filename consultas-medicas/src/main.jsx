import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { RolProvider } from "./contexts/RolProvider"
import { SessionProvider } from "./contexts/SessionProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SessionProvider>
            <RolProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </RolProvider>
        </SessionProvider>
    </React.StrictMode>
)
