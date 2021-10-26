import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PhotoProfile from '../form/photo_profile'
import CapaProfile from '../form/capa_profile'
import BiografForm from '../form/biograph'
// import PresentationProfile from '../form/presentation'
// import LinksList from '../layout/linksList'
import Person from '../form/person'
const EditProfileCard = () => {
    return <Card>
        <Card.Body className="mb-3 d-flex flex-column text-center">
            <Card.Title className="mb-3">Foto de perfil</Card.Title>
            <div className="text-center">
                <PhotoProfile />
            </div>
        </Card.Body>
        <Card.Body className="mb-3">
            <Card.Title className="mb-3 text-center">Foto de capa</Card.Title>
            <div className="text-center">
                <CapaProfile />
            </div>
        </Card.Body>
        <Card.Body className="mb-3 d-flex flex-column text-center">
            <Card.Title className="mb-3">Biografia</Card.Title>
            <div className="text-center">
                <BiografForm />
            </div>
        </Card.Body>
        <Card.Body className="mb-3">
            <Card.Title className="mb-3 text-center">Personalize a sua apresentação</Card.Title>
            <div className="text-center">
                {/* <PresentationProfile /> */}
                <Person />
                {/* <LinksList /> */}
            </div>
        </Card.Body>
        {/* <Card.Body className="mb-3">
            <Card.Title className="mb-3">Em Destaque</Card.Title>
        </Card.Body> */}
        <Button className="w-100">
            Salvar informações de seção Sobre
        </Button>
    </Card>
}
export default EditProfileCard