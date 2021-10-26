import React, { useContext, useState, useEffect } from 'react'
import { Form, Button, InputGroup, Col } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
const Person = () => {
    const { state, onChange, dispatch } = useContext(formContext)
    const [show, setShow] = useState(false)
    const {
        pes_nascfunda,
        pes_status_shep,
        pes_dados_pes,
    } = state
    useEffect(() => {
        if (pes_nascfunda) setShow(!show)
    }, [pes_nascfunda, setShow, show])
    return <Form >
        <div className="row text-center mb-3">
            <Form.Group as={Col} md={6} xs={12} className="mb-3" controlId="pes_nascfunda">
                <Form.Label>Data nascimento</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <i className="fas fa-calendar-week"></i>
                    </InputGroup.Text>
                    <Form.Control type="date" name="pes_nascfunda" value={pes_nascfunda} onChange={onChange} />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6} xs={12} className="mb-3" controlId="pes_status_shep">
                <Form.Label>Status de relacionamento</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <i className="fas fa-heart"></i>
                    </InputGroup.Text>
                    <Form.Control as="select" name="pes_status_shep" value={pes_status_shep} onChange={onChange}>
                        <option value={0}>Solteiro</option>
                        <option value={1}>Casado</option>
                        <option value={2}>Enrolado</option>
                    </Form.Control>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={12} xs={12} controlId="pes_status_shep">
                <Form.Label>Mostrar dados pessoais</Form.Label>
                <Col>
                    <Button className="me-3" variant={pes_dados_pes === 1 ? 'primary' : 'outline-primary'}
                        onClick={() => dispatch({ field: 'pes_dados_pes', value: 1 })}>
                        <i className="far fa-thumbs-up"></i> Sim
                    </Button>
                    <Button variant={pes_dados_pes === 0 ? 'danger' : 'outline-danger'} onClick={() => dispatch({ field: 'pes_dados_pes', value: 0 })}>
                        <i className="far fa-thumbs-down"></i> Não
                    </Button>
                </Col>
            </Form.Group>
        </div>
    </Form>
}
export default Person