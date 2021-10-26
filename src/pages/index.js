/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import PostCard from '../components/card/post'
import PresentationCard from '../components/card/presentation'
import Publications from '../components/card/publications'
// import PublishFilter from '../components/card/publish_filter'
import ContainerProfile from '../components/container/containerProfile'
import AboutProfile from '../components/modal/about'
import { formContext } from '../context/formContext'
import { userContext } from '../context/userContext'
const HomeIndex = () => {
    const { user } = useContext(userContext)
    const { onClick, state } = useContext(formContext)
    const { push } = useHistory()
    const {
        pes_capa,
        pes_nome,
        pes_fantasia,
        pes_dados_pes
    } = state
    useEffect(() => {
        user ? onClick(user) : push('/login')
    }, [user])
    useEffect(() => {
        if (pes_nome) document.title = `${pes_nome} ${pes_fantasia} | Fakebook`
    }, [pes_nome]);
    return <div className="jumbotron jumbotron-fluid" style={{ background: 'rgb(240 242 244 / 1)' }}>
        <div className="container d-flex justify-content-end align-items-end" style={{
            backgroundImage: `url(https://eshopee.com.br/api${pes_capa})`,
            backgroundSize: 'cover', height: 300, backgroundPosition: 'center'
        }}>
        </div>
        <ContainerProfile />
        <Container>
            <hr />
        </Container>
        <Container>
            <Row className="d-flex justify-content-center aligin-items-center">
                <Col md={5} xs={12}>
                    <PresentationCard />
                </Col>
                <Col md={7} xs={12}>
                    <PostCard />
                    {/* <PublishFilter /> */}
                    <Publications />
                </Col>
            </Row>
        </Container>
        <AboutProfile />
    </div>
}
export default HomeIndex
// rgb(240 242 244 / 1)