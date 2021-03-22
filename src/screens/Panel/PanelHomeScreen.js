import React from 'react';
import '../../panel.scss'
import {Col, Container, Table, Row} from "react-bootstrap";
import PanelAreaChart from "../../components/Charts/PanelAreaChart";
import PanelPieChart from "../../components/Charts/PanelPieChart";
import ListGroup from "react-bootstrap/ListGroup";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelHomeScreen = () => {




    return (
        <Container className='bg-secondary w3-animate-opacity homePanel my-4 py-3 '>
            <h3 className='text-right my-3'>پنل کاربری</h3>
            <div>
                <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i onClick={removeSection} className='fal fa-times'></i>
                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                    </div>

                    <p>لیست ارزهای دیجیتال </p>
                </div>
                <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                    <thead>
                    <tr>

                        <th>وضعیت</th>
                        <th>حداکثر قیمت</th>
                        <th>حجم معامله</th>
                        <th>حداقل قیمت</th>
                        <th>آخرین قیمت</th>
                        <th>نام ارز</th>
                        <th>نماد</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>
                            <PanelAreaChart/>
                        </td>


                        <td>8.7...421</td>
                        <td>12,000,000</td>
                        <td>8,700,421</td>
                        <td>20.50% <i className='fal fa-angle-up'></i></td>
                        <td>BitCoin</td>
                        <td><i className="cf cf-btc text-warning"></i></td>
                    </tr>

                    <tr>

                        <td>
                            <PanelAreaChart/>
                        </td>

                        <td>8.7...421</td>
                        <td>12,000,000</td>
                        <td>8,700,421</td>
                        <td>20.50% <i className='fal fa-angle-up'></i></td>
                        <td>Ethereum</td>
                        <td><i className="cf cf-eth text-primary"></i></td>
                    </tr>

                    </tbody>
                </Table>
            </div>
            <Row>

                <Col md={6}>
                    <div>
                        <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 '>

                            <div className='header-top-currency-list mt-2'>
                                <i onClick={removeSection} className='fal fa-times'></i>
                                <i onClick={makeFullWith} className='fal fa-expand'></i>
                                <i className='fal fa-redo'></i>
                                <i onClick={slideEffect} className='fal fa-angle-down'></i>
                            </div>

                            <h6 className='text-right my-3'>اطلاعات معاملات اخیر</h6>
                        </div>
                        <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                            <thead>
                            <tr>

                                <th>کارمزد</th>
                                <th>مبلغ کلیه</th>
                                <th>حجم</th>
                                <th>قیمت</th>
                                <th>نوع</th>
                                <th>بازار</th>
                                <th>زمان</th>
                                <th>#</th>
                            </tr>
                            </thead>
                        </Table>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 '>

                        <div className='header-top-currency-list mt-2'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <h6 className='text-right my-3'>کیف پول من</h6>
                    </div>
                    <div className='Inventory-amount text-right'>
                        <div className='mr-3'>
                            <p className='pt-3 sm-text text-muted'>مقدار موجودی</p>
                            <h5 className='dir-rtl'>
                                <span>پیشنهاد های خرید :</span>
                                <span>11.5003000</span>
                                <span className='font-weight-light mr-1 sm-text text-monospace'>(BTC)</span>
                            </h5>

                            <h5 className='dir-rtl'>
                                <span>پیشنهاد های فروش :</span>
                                <span>11.5003000</span>
                                <span className='font-weight-light mr-1 sm-text text-monospace'>(ETH)</span>
                            </h5>
                        </div>

                        <div>
                            <PanelPieChart/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 '>

                        <div className='header-top-currency-list mt-2'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <h6 className='text-right my-3'>وضعیت حساب کاربری</h6>
                    </div>
                    <ListGroup className='Account-status'>
                        <ListGroup.Item variant="dark">
                            <div className='d-flex flex-md-nowrap text-right justify-content-end'>
                                <a className='mr-2 text-danger' href="/#"> ارتقای عضویت</a>
                                <p>سطح کاربری : سطح صفر - ادامه فرایند احراز هویت</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>برداشت روزانه ریال: 0 از 0 تومان</p></ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>برداشت روزانه رمزارز: 0 از 0 تومان</p></ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>مجموع برداشت روزانه 0 از 0 تومان</p></ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>مجموع برداشت ماهانه: 0 از 0 تومان</p></ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>کارمزد معاملات: 0.35% (پله بعد 0.3%)</p></ListGroup.Item>
                        <ListGroup.Item variant="dark"><p>ارزش معاملات سی روز: 0 تومان (پله بعد 10 میلیون تومان)</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 '>

                        <div className='header-top-currency-list mt-2'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <h6 className='text-right my-3'>سفارشات باز</h6>
                    </div>
                    <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                        <thead>
                        <tr>

                            <th>اقدامات</th>
                            <th>پر شده</th>
                            <th>مبلغ کل</th>
                            <th>ارز</th>
                            <th>مقدار</th>
                            <th>قیمت سفارش</th>
                            <th>سمت</th>

                        </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>


        </Container>

    );
};

export default PanelHomeScreen;