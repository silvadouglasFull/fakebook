import React, { useContext } from 'react'
import { Card, Button, Image, Col } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
import { animationContext } from '../../context/animationContext'
const PresentationCard = () => {
    const { state } = useContext(formContext)
    const { visible, setVisible } = useContext(animationContext)
    const { pes_dados_pes, pes_status_shep, pes_nascfunda } = state
    return <>
        {pes_dados_pes === 1 &&
            <Card className="rounded-5 mb-3">
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <Card.Text>
                            <i className="fas fa-user-alt"></i> Informaçõesp pessoais
                        </Card.Text>
                        <Card.Text>
                            <Button variant="outline-dark"
                                onClick={() => setVisible(!visible)}><i class="fas fa-pencil-alt"></i></Button>
                        </Card.Text>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-3">
                        <Card.Text>
                            <i className="fas fa-calendar-week"></i> {pes_nascfunda}
                        </Card.Text>
                        <Card.Text>
                            20 anos
                        </Card.Text>
                        <Card.Text>
                            <i className="fas fa-heart"></i> {pes_status_shep === 0 && 'Solteiro'}
                            {pes_status_shep === 1 && 'Casado'}
                            {pes_status_shep === 2 && 'Enrolado'}

                        </Card.Text>
                    </div>
                    {/* <Button variant="secondary" className="mb-4">
                <i class="fas fa-pencil-alt"></i> biografia
                </Button>
                <Link className="text-decoration-none mb-4" to="#">
                facebook.com/balcaoinformatica/
                </Link>
                <Button variant="secondary" className="mb-4">
                <i class="fas fa-pencil-alt"></i> detalhes
                </Button>
                <Button variant="secondary" className="mb-4">
                Adicionar hobbies
            </Button> */}
                    {/* <Card.Text>
                    <i className="fas fa-map-marker-alt"></i>  Últimos lugares visitados
                    </Card.Text>
                    <Col className="mb-3">
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9djJ95My0nYDoHOG0fOq5kQz4RdXQNdAnA&usqp=CAU'
                    alt="img_profile" style={{ maxWidth: 100 }} className=" mb-2 rounded-5" />
                    <Card.Text>
                    China
                    </Card.Text>
                </Col> */}
                    <Card.Text>
                        <i className="fas fa-shopping-cart"></i>  Últimas lojas visitadas
                    </Card.Text>
                    <Col className="mb-3">
                        <Card.Text>
                            e-Sh<i className="fas fa-shopping-cart"></i>pee
                        </Card.Text>
                    </Col>
                </Card.Body>
            </Card>
        }
        <Card className="rounded-5 mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Text>
                        <i className="fas fa-users"></i> Amigos
                    </Card.Text>
                    <Card.Text>
                        <Button variant="outline-dark"
                            onClick={() => setVisible(!visible)}
                        ><i class="fas fa-pencil-alt"></i></Button>
                    </Card.Text>
                </div>
                <Col>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/260px-Sir_Isaac_Newton_%281643-1727%29.jpg'}
                        style={{ maxWidht: 150, maxHeight: 150 }} rounded className="mb-2"
                    />
                    <Card.Text>
                        Isaac Newton
                    </Card.Text>
                </Col>
            </Card.Body>
        </Card>
    </>
}
export default PresentationCard