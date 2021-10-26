import React, { useContext, useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { formContext } from "../../context/formContext";
import { userContext } from "../../context/userContext";
import { animationContext } from "../../context/animationContext";
const LoginForm = () => {
    const [type, setType] = useState('password')
    const { state, onChange, setValidated, validated } = useContext(formContext)
    const { visible, setVisible } = useContext(animationContext)
    const { onLogin, load, setLoad } = useContext(userContext)
    const {
        ps_pessoa,
        ps_senha
    } = state
    const onSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            const formData = new FormData()
            formData.append("ps_pessoa", ps_pessoa)
            formData.append("ps_senha", ps_senha)
            console.log(formData)
            onLogin(
                {
                    uri: '/pessoa/auth',
                    formData,
                    redirect: '/',
                    method: 'post'
                }
            )
        }
        setValidated(true)
    }
    return <Form validated={validated} onSubmit={onSubmit}>
        <Form.Group className="mt-4 mb-4">
            <Form.Control type="email" placeholder="Email ou telefone"
                onChange={onChange} name='ps_pessoa' id="ps_pessoa" size="lg"
                value={ps_pessoa}
                autoComplete="username"
                onFocus={() => setLoad(false)}
                maxLength={50} required />
        </Form.Group>
        <Form.Group controlId="form_tec_senha" className='mb-3'>
            <InputGroup>
                <Form.Control type={type} placeholder="Senha"
                    onChange={onChange} name='ps_senha'
                    maxLength={50} required size="lg"
                    value={ps_senha}
                    aria-label="ps_senha"
                    autoComplete="current-password"
                    aria-describedby="basic-addon1" />
                {ps_senha.length > 3 &&
                    <InputGroup.Text id="basic-addon1" style={{ background: 'none' }} onClick={() => setType(
                        type === 'text' ? 'password' : 'text'
                    )}>
                        {type === 'text' ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                    </InputGroup.Text>
                }
            </InputGroup>
        </Form.Group>
        <div className="d-grid gap-2 mb-3">
            <Button variant="primary" type="submit" size="lg" disabled={load}>
                {/* {loading ?
                    <Spinner animation="border" size="sm" /> :
                    <span> */}
                entrar
                {/* </span>
                } */}
            </Button>
        </div>
        <div className="text-center mb-3">
            <Link to="/create" className="text-decoration-none"> esqueceu a senha</Link>
        </div>
        <hr className="shadow-sm bg-body rounded" />
        <div className="text-center">
            <Button variant="success" size="lg" onClick={() => setVisible(!visible)}>
                {/* {loading ?
                    <Spinner animation="border" size="sm" /> :
                    <span> */}
                Criar conta
                {/* </span>
                } */}
            </Button>
        </div>
    </Form>
}
export default LoginForm