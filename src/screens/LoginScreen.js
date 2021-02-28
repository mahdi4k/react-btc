import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Tabs, Tab, Container, Col} from "react-bootstrap";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState('signIn')

    const isFocused = (e) => {
        let getParent = e.target.parentNode
        getParent.querySelector('label').style.top = "13px"
    }
    const isBlurred = (e) => {
        let getParent = e.target.parentNode
        getParent.querySelector('label').style.top = "43px"
    }

    return (
        <Container>
            <Col className='mx-auto' md={6}>
                <Tabs
                    className='controlled-tab-singInUp mt-5'
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="signIn" title="ورود">
                        <Form className='form-bg-darkBlue'>
                            <Form.Group controlId='email'>
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='email' value={email}
                                              onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='password'
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Button className='btn-block custom-button-login' type='submit' variant='primary'>
                                ورود
                            </Button>
                            <Link className='w-100 text-center d-flex justify-content-center mt-2 text-color ' to={'/forgotPassword'}>
                                فراموشی رمز عبور
                            </Link>
                        </Form>
                    </Tab>



                    <Tab eventKey="register" title="ثبت نام">
                        <Form className='form-bg-darkBlue'>
                            <Form.Group controlId='email'>
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='email' value={email}
                                              onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='password'
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Sign In
                            </Button>
                        </Form>
                    </Tab>

                </Tabs>
            </Col>
        </Container>
    );
};

export default LoginScreen;