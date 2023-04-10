import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

//data 
import FetchData from "../../../../fetchData/FetchData";
const { getEntities } = FetchData

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </div>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value ||
                            child.props.children
                                .toString()
                                .toLowerCase()
                                .startsWith(value.toLowerCase())
                    )}
                </ul>
            </div>
        );
    }
);

const SearchDropDown = ({ register, onSelect }) => {
    const [selectedItem, setSelectedItem] = useState(register);

    return (
        <Dropdown  onSelect={(eventKey) => {
            onSelect(eventKey);
            setSelectedItem(eventKey);
          }}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {selectedItem}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {getEntities.map((r, index) => (
                    <Dropdown.Item key={index} eventKey={r.direccion}>
                        {r.direccion}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SearchDropDown;
