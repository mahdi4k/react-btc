import React, { useState} from 'react';
import {Navbar, Nav, ButtonGroup, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";
import {slide as Menu} from 'react-burger-menu'

const Header = () => {


    return (
        <header>

            <Navbar className='dark-blue' variant='dark' expand="lg" collapseOnSelect>
                <ButtonGroup className='btn-sun-moon' >
                    <Button className='d-flex align-items-center btn-sunMoon-active' variant="outline-light"><i className="fas fa-moon"></i></Button>
                    <Button className='d-flex align-items-center ' variant="outline-light"><i className="fas fa-sun"></i></Button>
                </ButtonGroup>
                <Container className='justify-content-end sm-container-width' fluid>

                    <LinkContainer to='/'>
                        <Navbar.Brand>نام وبسایت</Navbar.Brand>
                    </LinkContainer>
                    <Nav>

                        <Menu  width={280} right>


                            <LinkContainer to='/'>
                                <a   id="home" className="menu-item" href="#">خانه</a>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <a id="about" className="menu-item" href="#">ورود/ثبت نام</a>
                            </LinkContainer>


                            <LinkContainer to='/orderOpen'>
                                <a id="orderOpen" className="menu-item" href="#">سفارش های باز</a>
                            </LinkContainer>

                            <LinkContainer to='/tradeHistory'>

                                <a id="tradeHistory" className="menu-item" href="#">تاریخچه تجارت</a>

                            </LinkContainer>

                            <LinkContainer to='/orderList'>

                                <a id="orderList" className="menu-item" href="#">لیست سفارشات</a>

                            </LinkContainer>

                        </Menu>

                    </Nav>

                </Container>

            </Navbar>

        </header>
    );
};

export default Header;
