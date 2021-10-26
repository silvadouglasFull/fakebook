import React, { useContext } from 'react'
import { Container, Image, Card, Button, Row, Col } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
import { animationContext } from '../../context/animationContext'
import NavTabMenu from '../tabs/navTabs'
const ContainerProfile = () => {
    const { state } = useContext(formContext)
    const { visible, setVisible } = useContext(animationContext)
    const {
        pes_nome,
        pes_fantasia,
        pes_img
    } = state
    // https://eshopee.com.br/api/storage/app/public/pessoa/207156418_593371488291256_2010393096666164648_n.jpg
    //src="https://scontent.fcpq9-1.fna.fbcdn.net/v/t1.6435-9/207156418_593371488291256_2010393096666164648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8kaxMvzKq_hCVtyrFNLRZNGL53c1roIU0YvndzWughRwfijEtK90iCprtgukc_9HV43uXsI0R4BNmb9iZGd8q&_nc_ohc=GMpAW-NqLtQAX_dbVMG&_nc_ht=scontent.fcpq9-1.fna&oh=ab7b381f4a906bf7bbeed7c4a016c484&oe=616B2DBE"
    return <Container style={{ background: '#FFFF' }}>
        {/*  className="d-flex flex-md-row  flex-sm-column justify-content-between flex-wrap align-items-center" */}
        {/* div className="d-flex justify-content-between flex-wrap align-items-center" */}
        <Row className="align-items-end p-3">
            <Col md={3} xs={12} style={{ marginTop: '-100px' }}>
                <Image style={{ maxWidth: 200, maxHeight: 250, border: '5px solid #FFF' }}
                    src={`https://eshopee.com.br/api${pes_img}`}
                    rounded />
            </Col>
            <Col md={9} xs={12}>
                <Card.Title>
                    {pes_nome} {pes_fantasia}
                </Card.Title>
                <Card.Text className="fst-italic">
                    A melhor vida de todas
                </Card.Text>
                <Button variant="primary" className="me-3">
                    <i className="fas fa-plus-circle"></i> Adicionar ao story
                </Button>
                <Button variant="secondary" onClick={() => setVisible(!visible)}>
                    <i className="fas fa-pencil-alt"></i> Editar perfil
                </Button>
                <NavTabMenu />
            </Col>
        </Row>
    </Container>
}
export default ContainerProfile