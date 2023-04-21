import { createContext, useState, useEffect, useContext } from "react"

const UserContext = createContext({})

export const useUserConext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        rol_id,
        num_colegiado,
        institucion
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
