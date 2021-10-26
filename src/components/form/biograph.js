import React, { useState, useContext } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
const BiografForm = () => {
    const { onChange, state, dispatch } = useContext(formContext)
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)
    const {
        pes_observacao
    } = state
    const onBlur = ({ target }) => {
        dispatch({ field: 'pes_observacao', value: target.value })
        setVisible(!visible)
    }
    const onClick = () => {
        setVisible(!visible)
        setShow(!show)
    }
    return <>
        {visible ?
            <Form.Group controlId="pes_observacao">
                <Form.Control as="textarea" name="pes_observacao" onBlur={onBlur}
                    value={pes_observacao} onChange={onChange} />
            </Form.Group>
            :
            <Card.Text onClick={onClick} className="text-center">
                {pes_observacao ? pes_observacao : <span onClick={onClick} style={{ cursor: 'pointer' }}>Criar biografia</span>}
            </Card.Text>
        }
        {show &&
            <Button className="mt-3" variant="primary" onClick={onClick}>
                Salvar biografia
            </Button>
        }
    </>
}
export default BiografForm