import { createContext, useState, useEffect, useContext } from "react"

const SessionContext = createContext({})

export const useSessionContext = () => useContext(SessionContext)

export const SessionProvider = ({ children }) => {
    const [sessionToken, setSessionToken] = useState({
        rol_id: "",
        num_colegiado: "",
        institucion: ""
    })

    useEffect(() => {
        localStorage.setItem("sessionToken", sessionToken)
    }, [sessionToken])

    return (
        <SessionContext.Provider value={{ sessionToken, setSessionToken }}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext
