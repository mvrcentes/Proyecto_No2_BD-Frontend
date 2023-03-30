import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

//style
import "./registerCard.css";

const RegisterCard = ({ nameLastName, entityName, entityAddress }) => {
    return (
        <div className="registerCard">
            <div className="fila">
                <div className="nameLastName">{nameLastName}</div>
                {/* <div className="entityName">{entityName}</div> */}
                <Dropdown className="entityNameDropdown" as={ButtonGroup}>
                    <Button className="entityNameButton">{entityName}</Button>

                    <Dropdown.Toggle
                        split
                        id="dropdown-split-basic"
                    />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="entityAddress">{entityAddress}</div>
            </div>
        </div>
    );
};

export default RegisterCard;
