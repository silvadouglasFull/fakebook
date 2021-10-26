import React, { useContext } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
const EmotionsList = () => {
    const { dispatch,state } = useContext(formContext)
    const {
        coments
    } = state
    const items = [
        { id: 0, text: '😻' },
        { id: 1, text: '😍' },
        { id: 2, text: '💘' },
        { id: 3, text: '❣' },
        { id: 4, text: '💓' },
        { id: 5, text: '💔' },
        { id: 6, text: '😘' },
        { id: 7, text: '😚' },
        { id: 8, text: '🤗' }
    ]
    const onClick = (text) => {
        dispatch({ field: 'coments', value: `${coments} ${text}`  })
    }
    return <Row>
        {items.map(item => (
            <Col md={4} xs={4} className="mb-3" key={item.id} onClick={() => onClick(item.text)}>
                <Button variant="light">
                    {item.text}
                </Button>
            </Col>
        ))}
    </Row>
}
export default EmotionsList