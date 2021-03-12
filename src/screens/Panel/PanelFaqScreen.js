import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import '../../css/_faq.scss'
const PanelFaqScreen = () => {
    return (
        <>
            <Container className='bg-secondary faqPanel my-4 py-3 '>

                <h4 className='text-right my-4'>سوالات متداول</h4>

                <div className='custom-box py-4 mb-4 pr-3'>
                    <p className='font-weight-bold mb-3'>توضیحات</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..
                    </p>
                </div>
                <div style={{background : '#565f67'}} className='px-3 d-table w-100'>
                    <div className='d-flex justify-content-between align-items-center my-3 px-1 bg-header  '>

                        <div className='header-top-currency-list mt-2'>
                            <i className='fal fa-times'></i>
                            <i className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i className='fal fa-angle-down'></i>
                        </div>

                        <h6 className='text-right text-white my-3'>اطلاعات معاملات اخیر</h6>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Card className='mb-4'>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                سوال شماره یک
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-4'>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                سوال شماره دو
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </Container>
        </>
    );
};

export default PanelFaqScreen;