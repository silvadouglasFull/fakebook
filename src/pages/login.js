import React from 'react'
import { Container, Card, Col } from 'react-bootstrap'
import LoginForm from '../components/form/login'
import Signin from '../components/modal/signin'
const Login = () => {
    return <Container style={{ margin: '0 auto', paddingTop: 72, paddingBottom: 112 }}>
        <div className="d-flex flex-wrap justify-content-between aligns-items-center p-4">
            <Card className='border-0' as={Col} md={7} xs={12}>
                <Card.Title className="display-2 text-primary fw-bold ">
                    fakebook
                </Card.Title>
                <Card.Text className="display-6 d-none d-md-block">
                    O Fakebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
                </Card.Text>
            </Card>
            <Col md={4} xs={12}>
                <LoginForm />
            </Col>
        </div>
        <Signin />
    </Container>
}
export default Login