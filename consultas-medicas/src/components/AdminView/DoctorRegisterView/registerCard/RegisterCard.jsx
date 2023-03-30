import { useEffect, useState } from "react";

//style
import "./RegisterCard.css";

//components
import SearchDropDown from "./SearchDropDown/SearchDropDown";

const RegisterCard = ({ nameLastName, entityName, entityAddress }) => {
    const [inicialEntity, setInicialEntity] = useState("");
    const [availableUpdate, setAvailableUpdate] = useState(false);
    const [selectedEntity, setSelectedEntity] = useState(entityName);

    useEffect(() => {
        const isAvailable = selectedEntity !== inicialEntity;
        setAvailableUpdate(isAvailable);
        setInicialEntity(entityName);
    }, [inicialEntity, selectedEntity]);

    return (
        <div className="registerCard">
            <div className="fila">
                <div className="nameLastName">{nameLastName}</div>
                {/* <div className="entityName">{entityName}</div> */}
                <SearchDropDown className="entityName" register={entityName} onSelect={(value) => setSelectedEntity(value)}/>
                <div className="entityAddress">{entityAddress}</div>
            </div>
            <button
                className="updateRegister"
                style={{ display: availableUpdate ? "block" : "none" }}
            >
                actualizar
            </button>
        </div>
    );
};

export default RegisterCard;
