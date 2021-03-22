import React from 'react';
import {Container, Form} from "react-bootstrap";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelAuthenticationScreen = () => {

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity text-right AuthScreen my-4 py-3 '>
                <h3 className='text-white mb-4'>احراز هویت چند مرحله ای</h3>
                <div className='p-4 text-white authTitle'>
                    <h5>تایید هویت دو مرحله ای چهت ورود به حساب کاربری</h5>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
                        و
                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه
                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
                        که
                        تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                        حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
                <div className='justify-content-between my-4 d-flex flex-column flex-lg-row'>
                    <div className='p-4 authBox d-flex align-items-center flex-column justify-content-center'>
                        <span>
                            <i className='fal text-danger fa-briefcase'></i>
                        </span>
                        <p className='mt-2'>احراز هویت پست الکترونیک</p>
                        <div className='mt-3'>
                            <button className='btn btn-sm btn-danger mr-2'>غیر فعال</button>
                            <button className='btn btn-sm btn-success'>فعال</button>
                        </div>
                    </div>

                    <div className='p-4 authBox d-flex align-items-center flex-column justify-content-center'>
                        <span>
                            <i className='fal text-danger fa-compass'></i>
                        </span>
                        <p className='mt-2'>احراز هویت پست پیامکی</p>
                        <div className='mt-3'>
                            <button className='btn btn-sm btn-danger mr-2'>غیر فعال</button>
                            <button className='btn btn-sm btn-success'>فعال</button>
                        </div>
                    </div>

                    <div className='p-4 authBox d-flex align-items-center flex-column justify-content-center'>
                        <span>
                            <i className='fal text-success fa-cube'></i>
                        </span>
                        <p className='mt-2'>احراز هویت گوگل</p>
                        <div className='mt-3'>
                            <button className='btn btn-sm btn-danger mr-2'>غیر فعال</button>
                            <button className='btn btn-sm btn-success'>فعال</button>
                        </div>
                    </div>

                    <div className='p-4 authBox d-flex align-items-center flex-column justify-content-center'>
                        <span>
                            <i className='fal text-success fa-cube'></i>
                        </span>
                        <p className='mt-2'>تغییر رمز عبور</p>
                        <div className='mt-3'>
                            <button className='btn btn-sm btn-danger mr-2'>غیر فعال</button>
                            <button className='btn btn-sm btn-success'>فعال</button>
                        </div>
                    </div>

                </div>

                <div className='mb-4'>

                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>
                        <p className='mb-0'>تنظیمات</p>
                    </div>

                    <div className='p-4 notif-setting'>
                        <p className='font-weight-bold my-2'>تنظیمات اعلانات</p>
                        <div>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک شارژ کیف پول
                                        کوین"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox1">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک شارژ کیف پول
                                        کوین"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox2">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک تایید شدن درخواست برداشت حسباب ریال"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox3">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک تایید شدن درخواست برداشت حسباب ریال"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox4">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک تایید شدن درخواست برداشت حسباب ریال"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox5">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک تایید شدن درخواست برداشت حسباب ریال"/>
                            </Form.Group>
                            <Form.Group className='mt-2' controlId="formBasicCheckbox6">
                                <Form.Check custom type="checkbox"
                                            label="ارسال پیامک تایید شدن درخواست برداشت حسباب ریال"/>
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default PanelAuthenticationScreen;