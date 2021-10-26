import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { storageContext } from '../../context/storageContext'
const LinksList = () => {
    const { link } = useContext(storageContext)
    return <ListGroup variant="flush" className="mt-3">
        {link.length > 0 &&
            link.map((item, i) => (
                <ListGroup.Item key={i} onClick={() => window.open(item).focus()} style={{ cursor: 'pointer' }}>
                    <span className="text-primary">
                        {item}
                    </span>
                </ListGroup.Item>
            ))
        }
    </ListGroup>
}
export default LinksList