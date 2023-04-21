import { useState } from "react"

import "./Modalll.css"

const Modalll = ({ modal, handleClose, children }) => {
    return (
        <>
            {modal && (
                <div className="modalll">
                    <div onClick={handleClose} className="overlay"></div>
                    <div className="modalll-content">
                        {children}
                        <button className="close-modal" onClick={handleClose}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modalll
