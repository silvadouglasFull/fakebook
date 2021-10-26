import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { storageContext } from '../../context/storageContext'
const ComentarioList = () => {
    const { comentario } = useContext(storageContext)
    return (
        Array.isArray(comentario) &&
        comentario.map(item => (
            item.pes_nome &&
            <Row className="mt-3">
                <Col md={2} xs={4}>
                    <small className="fw-bold">
                        {item.pes_nome}:
                    </small>
                </Col>
                <Col md={10} xs={8}>
                    {item.coments}
                </Col>
            </Row>
        ))
    )
}
export default ComentarioList