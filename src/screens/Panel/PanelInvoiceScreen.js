import React from 'react';
import {Container, Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PanelInvoiceScreen = () => {
    return (
        <>
            <Container className='bg-secondary w3-animate-opacity userInvoice my-4 py-3 '>
                <div className='dir-rtl'>
                    <span className='d-flex mt-3 w3-border-gray border-bottom h1 text-white'>
                        <p className='mb-3'>فاکتور</p>
                        <p className='mb-3'>254112</p>
                    </span>
                    <div>
                        <Row>
                            <Col className='text-right text-white' md={3}>

                                <h4 className='font-weight-bold mt-md-5'>شرکت پارسین وب
                                </h4>
                                <h6>ایران تهران خیابان
                                </h6>
                                <h6>ساختمان سعادت طبقه دوم واحد 10
                                </h6>
                                 <h6 className='border-dash'>پست الکترونیک</h6>
                                <h6>شماره تماس: 021-22334455
                                </h6>
                                <h6>شماره فکس: 02188776655
                                </h6>

                            </Col>
                            <Col className='text-right text-white' md={3}>

                                <h2 className='font-weight-bold' > نام مشتری : </h2>
                                <h6 className='font-weight-bold' >محمد رحمانس</h6>
                                <h6>کرج عظیمیه بلوار 13 آبان</h6>
                                <h6>پلاک 10</h6>
                                <h6 className='border-dash'>پست الکترونیک</h6>
                                <h6>mbagheri67@gmail.com</h6>
                                <h6>P: 026-55667788 </h6>
                                <h6 className='mt-5'><span className='font-weight-bold '>تاریخ فاکتور :</span><span>23 شهریور 1399</span></h6>
                                <h6><span className='font-weight-bold'>تاریخ سررسید :</span><span>24 شهریور 1399</span></h6>

                            </Col>
                        </Row>
                        <Table  responsive variant="dark overflow-hidden mt-5 header-top-currency-list-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>توضیحات</th>
                                <th>مقدار</th>
                                <th>قیمت واحد</th>
                                <th>قیمت کل</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td>1</td>
                                <td>بیت کوین</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>

                            <tr>

                                <td>1</td>
                                <td>اتریوم</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PanelInvoiceScreen;