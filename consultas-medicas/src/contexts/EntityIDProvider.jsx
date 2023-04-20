import { createContext, useState, useEffect, useContext } from "react"

const EntityIDContext = createContext(null)

export const useEntityIDContext = () => useContext(EntityIDContext)

export const EntityIDProvider = ({ children }) => {
    const [entityID, setEntityID] = useState(null)

    return (
        <EntityIDContext.Provider value={{ entityID, setEntityID }}>
            {children}
        </EntityIDContext.Provider>
    )
}

export default EntityIDContext
