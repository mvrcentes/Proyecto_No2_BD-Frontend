import React, { useEffect, useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import Form from "react-bootstrap/Form"

//data
import { getEntities } from "../../../../fetchData/FetchData"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault()
            onClick(e)
        }}
    >
        {children}
        &#x25bc;
    </div>
))

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("")

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
        )
    }
)

const SearchDropDown = ({ value, onSelect, data }) => {
    return (
        <Dropdown
            onSelect={(eventKey) => {
                onSelect(eventKey)
            }}
        >
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {value}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {data.map(({ id, name }) => (
                    <Dropdown.Item key={id} eventKey={id}>
                        {name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SearchDropDown
