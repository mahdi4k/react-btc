import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import '../../panel.scss'
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelProfileScreen = () => {

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity userProfile my-4 py-3 '>

                <h4 className='text-right my-4 text-white'>پروفایل کاربری</h4>

                <Row>

                    <Col md={6}>
                        <Card className='mb-4'>
                            <Card.Header>
                                <div className='d-flex justify-content-between align-items-center'>

                                    <div className='header-top-currency-list'>
                                        <i onClick={removeSection} className='fal fa-times'></i>
                                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                                        <i className='fal fa-redo'></i>
                                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                                    </div>
                                    <p className='mb-0'>سطح کاربری</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <span className='d-flex user-level  dir-rtl'>
                                        <p className='ml-2'> سطح کاربری : </p>
                                        <p className='mx-1'> سطح صفر -  </p>
                                        <p className='mx-1'>ادامه فرایند احراز هویت</p>
                                        <a className='text-danger mr-1' href='#'>ارتقای عضویت</a>
                                    </span>
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <div className='d-flex justify-content-between align-items-center'>

                                    <div className='header-top-currency-list'>
                                        <i onClick={removeSection} className='fal fa-times'></i>
                                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                                        <i className='fal fa-redo'></i>
                                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                                    </div>
                                    <p className='mb-0'>کد دعوت شما</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className='text-right user-info'>
                                    <h6>
                                        نام و نام خانوادگی
                                    </h6>
                                    <h6>
                                        کد ملی
                                    </h6>
                                    <h6>
                                        موبایل
                                    </h6>
                                    <h6>
                                        تلفن ثابت
                                    </h6>
                                    <h6>
                                        شهر
                                    </h6>
                                    <h6>
                                        رمز عبور
                                    </h6>
                                    <h6>
                                        آدرس
                                    </h6>
                                    <button className='custom-yellow-button btn btn-block mt-3'>ویرایش پروفایل</button>
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card className='mt-4'>
                            <Card.Header>
                                <div className='d-flex justify-content-between align-items-center'>

                                    <div className='header-top-currency-list'>
                                        <i onClick={removeSection} className='fal fa-times'></i>
                                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                                        <i className='fal fa-redo'></i>
                                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                                    </div>
                                    <p className='mb-0'>اطلاعات کارت بانکی</p>
                                </div>
                            </Card.Header>
                            <Card.Body >
                                <Card.Title className='text-right  user-info'>
                                    <h6>
                                        نام و نام خانوادگی
                                    </h6>
                                    <h6>
                                        شماره کارت
                                    </h6>
                                    <h6>
                                        شماره حساب بانکی
                                    </h6>
                                    <h6>
                                       شماره شبا
                                    </h6>

                                    <button className='custom-yellow-button btn btn-block mt-3'>افزودن کارت</button>
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>
        </>
    );
};

export default PanelProfileScreen;