import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { formContext } from '../../context/formContext' , { useContext }
import SearchPerson from '../form/searchPerson'
// import { ReactComponent as ReactLogo } from '../../assets/home.svg';
// import { ReactComponent as PlayLogo } from '../../assets/play.svg';
// import { ReactComponent as MarketPlace } from '../../assets/marketplace.svg';
// import { ReactComponent as GroupLogo } from '../../assets/group.svg';
// import { ReactComponent as JogoLogo } from '../../assets/jogos.svg';
const LayoutTemple = ({ children }) => {
    // const { state } = useContext(formContext)
    // const {
    //     pes_nome,
    // } = state
    return <>
        <Navbar bg="dark" variant="light">
            <Container className=" d-flex justify-content-between align-items-end">
                <Navbar.Brand href="#">
                    <Link to="/">
                        <i className="fab fa-facebook fa-2x text-light"></i>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-light align-items-center">
                        <Nav.Link href="#" className="text-light"><SearchPerson /></Nav.Link>
                        {/* <Nav.Link href="#" className="text-light d-none d-md-block"><ReactLogo /></Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block"><PlayLogo /></Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block"> <MarketPlace /></Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block"> <GroupLogo /></Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block"> <JogoLogo /></Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block">
                            <i className="far fa-user text-light me-3"></i>
                            <Link className="text-decoration-none text-light" to={`/${pes_nome}`}>{pes_nome}</Link>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block">
                            <i className="fab fa-facebook-messenger"></i>
                        </Nav.Link>
                        <Nav.Link href="#" className="text-light d-none d-md-block">
                            <i className="fas fa-sort-down"></i>
                        </Nav.Link>
                        <li className="nav-item dropdown d-block d-md-none">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bars text-light fa-2x"></i>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                            </div>
                        </li> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
            {children}
        </section>
    </>
}
export default LayoutTemple

/**
 *
 *                         {/* <div className="d-flex justify-content-between align-items-center align-self-center">
                            <div className="me-3"><ReactLogo /></div>
                            <div className="me-3"><PlayLogo /></div>
                            <div className="me-3"><MarketPlace /></div>
                            <div className="me-3"><GroupLogo /></div>
                            <div className="me-3"><JogoLogo /></div>
                        </div>
                        */
/*

                                <div className="me-3">
                                    <i className="far fa-user text-light me-3"></i>
                                    <Link className="text-decoration-none text-light" to={`/${name}`}>{name}</Link>
                                </div>
                                <div className="me-3">
                                    <i className="fab fa-facebook-messenger"></i>
                                </div>
                                <div className="me-3">
                                    <i className="fas fa-bell text-light"></i>
                                </div>
                                <div className="me-3">
                                    <i className="fas fa-sort-down"></i>
                                </div>


*/