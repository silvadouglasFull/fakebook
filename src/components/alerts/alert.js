import React, { useContext } from 'react'
import { storageContext } from '../../context/storageContext'
const Alerta = () => {
    const { show, setShow, message, variant } = useContext(storageContext)
    return (
        show &&
        <div onClick={() => setShow(false)}
            style={{ cursor: 'pointer' }}
            className={`alert alert-${variant}`} role="alert">
            <div className="d-flex flex-nowrap justify-content-between align-items-center">
                <div>
                    {message}
                </div>
                <div>
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
        </div>
    )
}
export default Alerta