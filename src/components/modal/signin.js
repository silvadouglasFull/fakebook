import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { animationContext } from '../../context/animationContext'
import Usuario from '../form/usuario'
const Signin = () => {
    const { visible, setVisible } = useContext(animationContext)
    return <Modal show={visible} onHide={() => setVisible(!visible)}>
        <Modal.Header closeButton>
            <Modal.Title>Cadastra-se</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Usuario />
        </Modal.Body>
        <Modal.Footer>
            Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Dados e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.
        </Modal.Footer>
    </Modal>
}
export default Signin