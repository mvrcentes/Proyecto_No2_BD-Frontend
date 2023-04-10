import { useState } from "react"

//style
import "./RegisterCard.css"

//components
import SearchDropDown from "./SearchDropDown/SearchDropDown"

const RegisterCard = ({
    nameLastName,
    entityName,
    entityAddress,
    onChange,
    index,
}) => {
    const [availableUpdate, setAvailableUpdate] = useState(false)

    const onClick = () => {
        console.log("aqui tiene que ir el put")
        setAvailableUpdate(false)
    }

    return (
        <div className="registerCard">
            <div className="fila">
                <div className="nameLastName">{nameLastName}</div>
                <div className="searchDropDown">
                    <SearchDropDown
                        className="entityName"
                        register={entityName}
                        onSelect={() => {
                            console.log("onselect")
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
