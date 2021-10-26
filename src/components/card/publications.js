import React, { useContext } from 'react'
import { Card, Image, Button, Row, Col } from 'react-bootstrap'
import CommentsForm from '../form/comments'
import { formContext } from '../../context/formContext'
import { storageContext } from '../../context/storageContext'
import ComentarioList from '../list/comentarioList'
const Publications = () => {
    const { state } = useContext(formContext)
    const { curtida, setCurtida } = useContext(storageContext)
    const {
        pes_nome,
        pes_fantasia,
        pes_img
    } = state
    return <Card className="rounded-5 mb-3">
        <Card.Body>
            <Row>
                <Col md={10} xs={8}>
                    <Row>
                        <Image src={`https://eshopee.com.br/api${pes_img}`}
                            // src='https://scontent.fcpq9-1.fna.fbcdn.net/v/t1.6435-9/207156418_593371488291256_2010393096666164648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8kaxMvzKq_hCVtyrFNLRZNGL53c1roIU0YvndzWughRwfijEtK90iCprtgukc_9HV43uXsI0R4BNmb9iZGd8q&_nc_ohc=GMpAW-NqLtQAX_dbVMG&_nc_ht=scontent.fcpq9-1.fna&oh=ab7b381f4a906bf7bbeed7c4a016c484&oe=616B2DBE'
                            roundedCircle style={{ width: 70, height: 50 }} alt="img_small" />
                        <Col>
                            <Card.Title>
                                {pes_nome} {pes_fantasia}
                            </Card.Title>
                            <Card.Text>
                                15 de setembro de 2020
                            </Card.Text>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} xs={4}>
                    <Button variant="light">
                        <span className="fw-bold">...</span>
                    </Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Image src='https://scontent.fcpq9-1.fna.fbcdn.net/v/t1.6435-9/240299795_2115412145282304_1841429552060989031_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE8vKtq-hbT_47_rjJMPyKsvY28I5Y0l5u9jbwjljSXm_4pXsf9Tc9MljI_o_q_IXbU1LIeVgYY5y2QXztnpAjH&_nc_ohc=yjQThAlMZWwAX9fdAAr&_nc_ht=scontent.fcpq9-1.fna&oh=ef06781994c35e8cb0ad54c15f382a33&oe=616CF4AA'
                    className="w-100" style={{ width: '100%', maxHeight: 420 }} />
            </Row>
            <Card.Title>
                Hacker Downs
            </Card.Title>
            <Card.Text>
                3tra d e s Se t eeutmhpbnrno à hhhas d17:58d  · <i className="fas fa-globe-asia"></i>
            </Card.Text>
            {curtida  &&
                <Row>
                    <Col>
                        <Card.Text>
                            {curtida} curtiram
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>
                            <i className="fab fa-gratipay text-danger"></i> Douglas Silva
                        </Card.Text>
                    </Col>
                </Row>
            }
            <hr />
            <Row className="text-center">
                <Col md={4} xs={4}>
                    <Button variant={curtida ? "primary" : "light"} className="me-3" onClick={() => setCurtida(1)}>
                        <i className="far fa-thumbs-up"></i> Curtir
                    </Button>
                </Col>
                <Col md={4} xs={4}>
                    <Button variant="light" className="me-3">
                        <i className="far fa-comment"></i> Comentar
                    </Button>
                </Col>
                <Col md={4} xs={4}>
                    <Button variant="light" className="me-3">
                        <i className="fas fa-share"></i> Compartilhar
                    </Button>
                </Col>
            </Row>
            <hr />
            <CommentsForm />
            <ComentarioList />
        </Card.Body>
    </Card>
}
export default Publications