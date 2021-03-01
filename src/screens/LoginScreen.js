import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Tabs, Tab, Container, Col} from "react-bootstrap";
import StrengthPassword from "../components/StrengthPassword";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState('signIn')
// register states
    const [RegisterEmail, setRegisterEmail] = useState('')
    const [RegisterPassword, setRegisterPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [referralCode, setReferralCode] = useState('')

    const isFocused = (e) => {
        let getParent = e.target.parentNode
        getParent.querySelector('label').style.top = "13px"
        console.log(e.target.value)
    }
    const isBlurred = (e) => {
        let getParent = e.target.parentNode
        getParent.querySelector('label').style.top = "43px"
        if (e.target.value){
            getParent.querySelector('label').style.top = "13px"
        }
    }


    return (
        <Container>
            <Col className='mx-auto my-5' md={6}>
                <Tabs
                    className='controlled-tab-singInUp '
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
                            <Link className='w-100 text-center d-flex justify-content-center mt-2 text-color '
                                  to={'/forgotPassword'}>
                                فراموشی رمز عبور
                            </Link>
                        </Form>
                    </Tab>


                    <Tab eventKey="register" title="ثبت نام">
                        <Form className='form-bg-darkBlue'>
                            <Form.Group controlId='registerEmail'>
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='email' value={RegisterEmail}
                                              onChange={(e) => setRegisterEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='registerPassword'>
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='password'
                                              value={RegisterPassword}
                                              onChange={(e) => setRegisterPassword(e.target.value)}>
                                </Form.Control>
                                <StrengthPassword passLength={RegisterPassword.length}/>
                            </Form.Group>

                            <Form.Group controlId='ConfirmPassword'>
                                <Form.Label>تایید رمز عبور</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='password'
                                              value={confirmPassword}
                                              onChange={(e) => setConfirmPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='referralCode'>
                                <Form.Label>کد ارجاع</Form.Label>
                                <Form.Control onBlur={isBlurred}
                                              onFocus={isFocused} type='text'
                                              value={referralCode}
                                              onChange={(e) => setReferralCode(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check custom type="checkbox" label="تمام قوانین سایت را قبول میکنم"/>
                            </Form.Group>
                            <Button className='btn-block custom-button-register py-2' type='submit' variant='primary'>
                                ثبت نام
                            </Button>
                        </Form>
                    </Tab>

                </Tabs>
            </Col>
        </Container>
    );
};

export default LoginScreen;