import React, {useState} from 'react';
import {Col, Table, Tab, Tabs, Container} from "react-bootstrap";

const TradeHistoryScreen = () => {
    const [key, setKey] = useState('deposit')


    return (
        <>
            <Container className='TradeHistory BTC-table'>
                <Col className='mx-auto my-5' md={12}>
                    <Tabs
                        className='controlled-tab-BTC orderOpenNav'
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="deposit" title="تاریخچه سپرده">
                            <div style={{background: '#1E2841'}} className='px-3'>
                                <Table variant="dark" borderless>
                                    <thead>
                                    <tr>
                                        <th>txID</th>
                                        <th>تاریخ</th>
                                        <th>واحد</th>
                                        <th>مقدار</th>
                                        <td>وضعیت</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>3434sadsa3434</td>
                                        <td>2021-03-01</td>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td style={{color: '#B53A46'}}>لغو شده</td>
                                    </tr>
                                    <tr>
                                        <td>3434sadsa3434434</td>
                                        <td>2021-03-01</td>
                                        <td>BTC</td>
                                        <td>0.300000000</td>
                                        <td style={{color: '#349477'}}>پذیرفته شده</td>
                                    </tr>
                                    <tr>
                                        <td>3434sad343sa34344344</td>
                                        <td>2021-03-01</td>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td style={{color: '#349477'}}>پذیرفته شده</td>
                                    </tr>
                                    <tr>
                                        <td>3434sa34d343sa34344344</td>
                                        <td>2021-03-01</td>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td style={{color: '#349477'}}>پذیرفته شده</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </Tab>

                        <Tab eventKey="trade" title="تاریخچه برداشت از حساب">

                            <div style={{background: '#1E2841'}} className='px-3'>
                                <Table variant="dark" borderless>
                                    <thead>
                                    <tr>

                                        <th>آدرس</th>
                                        <th>تاریخ</th>
                                        <th>واحد</th>
                                        <th>مقدار</th>
                                        <th>قیمت</th>
                                        <th>وضعیت</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>

                                        <td>ASQWdsggeEE</td>
                                        <td>2021-03-01</td>
                                        <td>BCH</td>
                                        <td>0</td>
                                        <td>1.500</td>
                                        <td style={{color: '#349477'}}>موفق</td>
                                    </tr>
                                    <tr>

                                        <td>ASQWsaddsggeEE</td>
                                        <td>2021-03-01</td>
                                        <td>BTC</td>
                                        <td>0.300000000</td>
                                        <td>0.0000</td>
                                        <td style={{color: '#B53A46'}}>ناموفق</td>
                                    </tr>
                                    <tr>

                                        <td>@REDFDSGHR</td>
                                        <td>2021-03-01</td>
                                        <td>XRP</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td style={{color: '#349477'}}>موفق</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </Tab>



                        <Tab eventKey="withdrawal" title="تاریخچه تجارت">

                            <div style={{background: '#1E2841'}} className='px-3'>
                                <Table variant="dark" borderless>
                                    <thead>
                                    <tr>
                                        <th>تاریخ</th>
                                        <th>slide</th>
                                        <th>فروشگاه</th>
                                        <th>قیمت</th>
                                        <th>مقدار</th>
                                        <th>کل</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td></td>
                                        <td></td>
                                        <td>0</td>
                                        <td>1.500</td>
                                        <td>570</td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td></td>
                                        <td>ETH/BTC</td>
                                        <td>0.300000000</td>
                                        <td>0.0000</td>
                                        <td>123.12323</td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td></td>
                                        <td></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>123</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>



                    </Tabs>
                    <div className='paginate-orderOpen d-flex justify-content-end'>
                        <div className='mr-3 py-3 d-flex'>
                            <div className='mr-5 d-flex'>
                                <span className='mr-1'>1</span> - <span className='ml-1'>4</span>
                            </div>
                            <span className='mr-5 d-flex align-items-center'><i
                                className='fal fa-angle-left'></i></span>
                            <span className='d-flex align-items-center'><i className='fal fa-angle-right'></i></span>
                        </div>


                    </div>
                </Col>
            </Container>

        </>
    );
};

export default TradeHistoryScreen;