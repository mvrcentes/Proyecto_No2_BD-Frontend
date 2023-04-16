import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

import "./CardInfoPatient.css"

const OptionView = ({ option }) => {
    return (
        <div className="option-view">
            <div className="info-text">{option}</div>
        </div>
    )
}

const CardInfoPatient = ({ title, options, note, type }) => {
    return (
        <div className="info-card-patient">
            <div className="info-card-patient-container">
                <div className="info-title-card">{title}</div>
                <div className="info-row-cards">
                    {type ? (
                        <p className="note">{note}</p>
                    ) : (
                        options.map((option, index) => (
                            <OptionView option={option} key={index} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardInfoPatient
