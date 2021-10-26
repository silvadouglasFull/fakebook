import React, { useContext } from "react";
import { Form, InputGroup } from 'react-bootstrap'
import { formContext } from "../../context/formContext";
const SearchPerson = () => {
    const { state, onChange } = useContext(formContext)
    const {
        name
    } = state
    return <Form.Group controlId="name">
        <InputGroup style={{ background: 'none' }}>
            <InputGroup.Text style={{ background: 'none', borderRight: 'none', borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}>
                <i className="fas fa-search text-light"></i>
            </InputGroup.Text >
            <Form.Control className="text-light" style={{
                background: 'none', borderLeft: 'none', borderTopRightRadius: 50, borderBottomRightRadius: 50
            }}
                value={name} onChange={onChange} placeholder="Pesquisar no fakebook" />
        </InputGroup>
    </Form.Group>
}
export default SearchPerson