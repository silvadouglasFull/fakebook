import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { animationContext } from '../../context/animationContext'
import EditProfileCard from '../card/edit_profile'
const AboutProfile = () => {
    const { visible, setVisible } = useContext(animationContext)
    return <Modal size="lg" show={visible} onHide={() => setVisible(!visible)}>
        <Modal.Header closeButton>
            <Modal.Title>Editar perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditProfileCard />
        </Modal.Body>
    </Modal>
}
export default AboutProfile