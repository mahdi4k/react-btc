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
                                <Button className="menu-item text-right" variant="link">خانه</Button>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Button className="menu-item text-right" variant="link">ورود/ثبت نام</Button>
                            </LinkContainer>


                            <LinkContainer to='/orderOpen'>

                                <Button className="menu-item text-right" variant="link">سفارش های باز</Button>

                            </LinkContainer>

                            <LinkContainer to='/tradeHistory'>

                                <Button className="menu-item text-right" variant="link">تاریخچه تجارت</Button>


                            </LinkContainer>

                            <LinkContainer to='/orderList'>

                                 <Button className="menu-item text-right" variant="link">لیست سفارشات</Button>

                            </LinkContainer>

                        </Menu>

                    </Nav>

                </Container>

            </Navbar>

        </header>
    );
};

export default Header;
