import { useState } from "react"

//style
import "./RegisterCard.css"

//components
import SearchDropDown from "../registerCard/SearchDropDown/SearchDropDown"

//Data
import { updateDoctor } from "../../../../components/fetchData/FetchData"
import { useEntityIDContext } from "../../../../contexts/EntityIDProvider"

const RegisterCard = ({
    nameLastName,
    numCole,
    entityName,
    entityAddress,
    onChange,
    index,
}) => {
    const [availableUpdate, setAvailableUpdate] = useState(false)
    const { entityID } = useEntityIDContext()
    const onClick = async () => {
        console.log(entityID)
        await updateDoctor(numCole, entityID)
        setAvailableUpdate(false)
    }

    return (
        <div className="registerCard">
            <div className="fila">
                <div className="nameLastName">{nameLastName}</div>
                <div className="numCole">{numCole}</div>
                <div className="searchDropDown">
                    <SearchDropDown
                        className="entityName"
                        register={entityName}
                        numCole={numCole}
                        onSelect={() => {
                            onChange(index)
                            setAvailableUpdate(true)
                        }}
                    />
                </div>
                <div className="entityAddress">{entityAddress}</div>
            </div>
            {availableUpdate && (
                <button className="updateRegister" onClick={onClick}>
                    actualizar
                </button>
            )}
        </div>
    )
}

export default RegisterCard
