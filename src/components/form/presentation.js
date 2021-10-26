import React, { useContext } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
import { storageContext } from '../../context/storageContext'
const PresentationProfile = () => {
    const { onChange, state } = useContext(formContext)
    const {
        pes_links
    } = state
    const { link, setLink } = useContext(storageContext)
    const onClick = () => {
        setLink([...link, pes_links])
    }
    return <>
        <InputGroup>
            <Form.Control name="pes_links" value={pes_links} onChange={onChange} />
            <InputGroup.Text  onClick={onClick}>
                <i className="fas fa-plus-circle"></i>
            </InputGroup.Text>
        </InputGroup>
        {link.length > 0 &&
            <Button className="w-100 mt-3" variant="primary">
                Salvar apresentação
            </Button>
        }
    </>
}
export default PresentationProfile