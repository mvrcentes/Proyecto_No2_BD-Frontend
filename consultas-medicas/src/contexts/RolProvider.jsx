import { createContext, useState, useEffect, useContext } from "react"

const RolContext = createContext(null)

export const useRolContext = () => useContext(RolContext)


export const RolProvider = ({ children }) => {
    const [rol, setRol] = useState(
        () => {
            const r = localStorage.getItem("rol_id")
            return r ? Number(r) : null
        }
    )

    useEffect( () => {
        localStorage.setItem("rol_id", rol)
    }, [rol])

    return (
        <RolContext.Provider value={{ rol, setRol }}>
            {children}
        </RolContext.Provider>
    )
}

export default RolContext
