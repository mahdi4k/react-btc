import React from 'react';
import {Navbar, Nav, ButtonGroup, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import SideNavbar from "./SideNavbar";

const Header = () => {


    return (
        <header>

            <Navbar className='dark-blue py-1' variant='dark' expand="lg" collapseOnSelect>
                <ButtonGroup className='btn-sun-moon'>
                    <Button className='d-flex align-items-center btn-sunMoon-active' variant="outline-light"><i
                        className="fas fa-moon"> </i></Button>
                    <Button className='d-flex align-items-center ' variant="outline-light"><i
                        className="fas fa-sun"> </i></Button>
                </ButtonGroup>
                <Container className='justify-content-end mr-0 sm-container-width' fluid>

                    <LinkContainer to='/'>
                        <Navbar.Brand className='d-flex'>
                            <p>فیبودکس</p>
                            <Image src='/images/logo.png'/>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav>

                        <SideNavbar/>

                    </Nav>

                </Container>

            </Navbar>

        </header>
    );
};

export default Header;
