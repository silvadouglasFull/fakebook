import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import PostForm from '../form/new_post'
const PostCard = () => {
    return <Card className="rounded-5 mb-3">
        <Card.Body>
            <PostForm />
            <hr />
            <ButtonGroup className="d-flex justify-content-center">
                <Button variant="light" className="me-3">
                    <i className="fas fa-video text-danger"></i> Vídeo ao vivo
                </Button>
                <Button variant="light" className="me-3">
                    <i className="far fa-images text-success"></i> Foto/Vídeo
                </Button>
                <Button variant="light" className="d-none d-md-block me-3">
                    <i className="fab fa-font-awesome-flag text-info"></i> Acontecimento
                </Button>
            </ButtonGroup>
        </Card.Body>
    </Card>
}
export default PostCard