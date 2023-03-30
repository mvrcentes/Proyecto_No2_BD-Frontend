import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import axios from 'axios'

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
                            child.props.children.toString().toLowerCase().startsWith(value.toLowerCase())
                    )}
                </ul>
            </div>
        );
    }
);

const SearchDropDown = ({register, onSelect}) => {
    const [registers, setRegisters] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')

    const fetchData = async () => {
        // const res = await axios.get("http://10.100.6.212:4000/api/hospitales");
        // const res = await axios.get("http://172.20.10.2:4000/api/hospitales");
        const res = await axios.get("http://192.168.1.6:4000/api/hospitales");
        setRegisters(res.data);
    };

    useEffect(() => {
        fetchData();
    }, [registers]);

    const onClickSelectOption = (e) => {
        console.log(e)
        setSelectedOption(e)
    }

    return (
        <Dropdown onSelect={onClickSelectOption}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {selectedOption || register}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {registers.map((register, index) =>  (<Dropdown.Item key={index} eventKey={register.direccion}>{register.direccion}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default SearchDropDown