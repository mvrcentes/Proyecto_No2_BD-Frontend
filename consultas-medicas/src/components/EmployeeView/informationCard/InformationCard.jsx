import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import "./InformationCard.css";

const InformationCard = () => {
    return (
        // <Form noValidate validated={validated} onSubmit={handleSubmit} className>
        <Form className="informationCard">

            <div className="patient">Paciente</div>
            
            <Form.Group as={Col} md="0" controlId="validationCustom01" className="formGroup">
                <Form.Label className="label-form">Nombres</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Nombres"
                    className="inputForm"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="0" controlId="validationCustom02" className="formGroup">
                <Form.Label >Apellidos</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Apellidos"
                    className="inputForm"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="0" controlId="validationCustom03" className="formGroup">
                <Form.Label className="label-form">CUI</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="CUI"
                    className="inputForm"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="0" controlId="validationCustom04" className="formGroup">
                <Form.Label className="label-form">Correo</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Correo"
                    className="inputForm"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            
        </Form>
    );
};

export default InformationCard;
