import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { RolProvider } from "./contexts/RolProvider"
import { EntityIDProvider } from "./contexts/EntityIDProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RolProvider>
            <EntityIDProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </EntityIDProvider>
        </RolProvider>
    </React.StrictMode>
)
