import React, { useState, useRef, useContext } from 'react'
import { Form, Image, InputGroup, Row, Col, Overlay, Tooltip } from 'react-bootstrap'
import { formContext } from '../../context/formContext';
import { storageContext } from '../../context/storageContext';
import EmotionsList from '../list/emotions';
const CommentsForm = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const { comentario, setComentario } = useContext(storageContext)
    const { state, onChange, dispatch } = useContext(formContext)
    const {
        coments,
        pes_nome,
    } = state
    const onClick = () => {
        const input = document.getElementById('formFile')
        if (input) input.click()
    }
    const handleComnts = () => {
        if (coments) {
            setComentario([...comentario, { pes_nome, coments }])
            dispatch({ field: 'coments', value: '' })
        }
    }
    return <Row>
        <Form.Group controlId="formFile" style={{ display: 'none' }}>
            <Form.Label>UploadFile</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
        <Col md={2} xs={2}>
            <Image src='https://scontent.fcpq9-1.fna.fbcdn.net/v/t1.6435-9/207156418_593371488291256_2010393096666164648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8kaxMvzKq_hCVtyrFNLRZNGL53c1roIU0YvndzWughRwfijEtK90iCprtgukc_9HV43uXsI0R4BNmb9iZGd8q&_nc_ohc=GMpAW-NqLtQAX_dbVMG&_nc_ht=scontent.fcpq9-1.fna&oh=ab7b381f4a906bf7bbeed7c4a016c484&oe=616B2DBE'
                roundedCircle style={{ maxWidth: 50, maxWeight: 50, margin: 0 }} alt="img_small" />
        </Col>
        <Col md={10} xs={10}>
            <InputGroup>
                <Form.Control className="border-0" name='coments' value={coments}
                    onChange={onChange} placeholder="Escreva seu comentário"
                    style={{
                        background: 'rgb(240 242 244 / 1)', borderTopLeftRadius: 50,
                        borderBottomLeftRadius: 50
                    }} size="lg" />
                <InputGroup.Text className="border-0">
                    <i className="far fa-smile me-3" ref={target} onClick={() => setShow(!show)}
                        style={{ cursor: 'pointer' }}></i>
                    <Overlay target={target.current} show={show} placement="top">
                        {(props) => (
                            <Tooltip
                                id="overlay-example" {...props}>
                                <EmotionsList />
                            </Tooltip>
                        )}
                    </Overlay>
                    <i className="fas fa-camera me-3" style={{ cursor: 'pointer' }} onClick={onClick}></i>
                    <i className="far fa-sticky-note me-3" style={{ cursor: 'pointer' }}></i>
                    <i class="far fa-comments" style={{ cursor: 'pointer' }} onClick={handleComnts}></i>
                </InputGroup.Text>
            </InputGroup>
        </Col>
    </Row>
}
export default CommentsForm