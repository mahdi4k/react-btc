import React from 'react';
import {Container, Table} from "react-bootstrap";
import {removeSection, makeFullWith, slideEffect} from "../../components/Helper"

const PanelTransActionHistoryScreen = () => {


    return (
        <>
            <Container className='bg-secondary w3-animate-opacity  reffrals my-4 py-3 '>
                <h4 className='text-right my-4 text-white'>تاریخچه معاملات</h4>
                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>لیست سفارشات</p>
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
                        <tbody>
                        <tr>

                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td></td>
                        </tr>

                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>تاریخچه سفارشات</p>
                    </div>
                    <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                        <thead>
                        <tr>
                            <th>کارمزد</th>
                            <th>مبلغ کل</th>
                            <th>حجم</th>
                            <th>قیمت</th>
                            <th>نوع</th>
                            <th>بازار</th>
                            <th>زمان</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                            <td>tether 0.43</td>
                            <td>5,444,900</td>
                            <td>344.45</td>
                            <td>24500</td>
                            <td>خرید</td>
                            <td>تتر-ریال</td>
                            <td>3:45</td>
                        </tr>

                        <tr>

                            <td>tether 0.43</td>
                            <td>5,444,900</td>
                            <td>344.45</td>
                            <td>24500</td>
                            <td>خرید</td>
                            <td>تتر-ریال</td>
                            <td>3:45</td>
                        </tr>

                        <tr>

                            <td>tether 0.43</td>
                            <td>5,444,900</td>
                            <td>344.45</td>
                            <td>24500</td>
                            <td>خرید</td>
                            <td>تتر-ریال</td>
                            <td>3:45</td>
                        </tr>

                        <tr>

                            <td>tether 0.43</td>
                            <td>5,444,900</td>
                            <td>344.45</td>
                            <td>24500</td>
                            <td>خرید</td>
                            <td>تتر-ریال</td>
                            <td>3:45</td>
                        </tr>

                        </tbody>
                    </Table>
                </div>
            </Container>
            </>
            );
            };

            export default PanelTransActionHistoryScreen;