import React from 'react'
import { Card, Button, Row, Col, Nav } from 'react-bootstrap'
const PublishFilter = () => {
    return <Card className="rounded-5 mb-3">
        <Card.Body className="d-flex flex-column">
            <Row>
                <Col md={3} xs={6}>
                    <Card.Title>
                        Publicações
                    </Card.Title>
                </Col>
                <Col md={9} xs={6} className="d-none d-md-block">
                    <Button className="me-3" variant="light">
                        <i className="fas fa-filter"></i> Filtros
                    </Button>
                    <Button className="me-3" variant="light">
                        <i className="fas fa-cog"></i> Gerenciar publicações
                    </Button>
                </Col>
                <Col md={9} xs={6} className="d-block d-md-none">
                    <Button className="me-3" variant="light">
                        <i className="fas fa-filter"></i>
                    </Button>
                    <Button className="me-3" variant="light">
                        <i className="fas fa-cog"></i>
                    </Button>
                </Col>
            </Row>
            <hr />
            <Nav justify variant="tabs" defaultActiveKey="/home" >
                <Nav.Item className="d-none d-md-block">
                    <Nav.Link href="/#">
                        <i className="fas fa-list"></i> Visualização em lista
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-md-block">
                    <Nav.Link eventKey="link-1">
                        <i class="fas fa-th-large"></i> Visualizaçãoem grade
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item  className="d-block d-md-none">
                    <Nav.Link href="/#">
                        <i className="fas fa-list"></i>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item  className="d-block d-md-none">
                    <Nav.Link eventKey="link-1">
                        <i class="fas fa-th-large"></i>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Body>
    </Card>
}
export default PublishFilter