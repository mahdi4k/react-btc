import React from 'react';
import {Navbar, Nav, ButtonGroup, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";
import {slide as Menu} from 'react-burger-menu'

const Header = () => {

    return (
        <header>

            <Navbar className='dark-blue' variant='dark' expand="lg" collapseOnSelect>
                <ButtonGroup className='btn-sun-moon' >
                    <Button className='d-flex align-items-center btn-sun-moon-active' variant="outline-light"><i className="fas fa-moon"></i></Button>
                    <Button className='d-flex align-items-center' variant="outline-light"><i className="fas fa-sun"></i></Button>
                </ButtonGroup>
                <Container className='justify-content-end sm-container-width' fluid>

                    <LinkContainer to='/'>
                        <Navbar.Brand>نام وبسایت</Navbar.Brand>
                    </LinkContainer>
                    <Nav>

                        <Menu width={280} right>
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="about" className="menu-item" href="/about">About</a>
                            <a id="contact" className="menu-item" href="/contact">Contact</a>
                            <a className="menu-item--small" href="">Settings</a>
                        </Menu>

                    </Nav>

                </Container>

            </Navbar>

        </header>
    );
};

export default Header;
