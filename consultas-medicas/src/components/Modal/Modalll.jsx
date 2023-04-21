import { useState } from "react"

import "./Modalll.css"

const Modalll = ({ modal, handleClose, children, onClick }) => {
    return (
        <>
            {modal && (
                <div className="modalll">
                    <div onClick={handleClose} className="overlay"></div>
                    <div className="modalll-content">
                        {children}
                        <button className="close-modal" onClick={onClick}>
                            AÑADIR
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modalll
