import React from 'react'
import { Nav } from 'react-bootstrap'
const NavTabMenu = () => {
    const tabs = [
        { id: 0, linK: '/public', text: 'Publicações', },
        { id: 1, linK: '/about', text: 'Sobre', },
        { id: 2, linK: '/frends', text: 'Amigos', },
        { id: 3, linK: '/stories_arquive', text: 'Arquivo de stories', },
        { id: 4, linK: '/videos', text: 'Vídeos', },
        { id: 5, linK: '#', text: 'Mais', },
    ]
    return <Nav defaultActiveKey="/home" as="ul">
        {tabs.map(item => (
            <Nav.Item key={item.id} as="li">
                <Nav.Link className="text-dark" href="/home">{item.text}</Nav.Link>
            </Nav.Item>
        ))}
    </Nav>
}
export default NavTabMenu