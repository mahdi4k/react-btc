import React, {useState} from 'react';
import {Col, Table, Tab, Tabs, Container, TabPane} from "react-bootstrap";

const OrderOpen = () => {
    const [key, setKey] = useState('open')
    const CancelAll = (e) => {
        console.log('clicked')
    }

    return (
        <>
            <Container className='orderOpen'>
                <Col className='mx-auto my-5' md={12}>
                    <Tabs
                        className='controlled-tab-BTC orderOpenNav'
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="open" title="باز">
                            <div style={{background: '#1E2841'}} className='px-3'>
                                <Table variant="dark" borderless>
                                    <thead>
                                    <tr>
                                        <th>تاریخ</th>
                                        <th>نوع سفارش</th>
                                        <th>جفت</th>
                                        <th>قیمت</th>
                                        <th>Executed</th>
                                        <th>باقی مانده</th>
                                        <th>هزینه باقیمانده</th>
                                        <th>وضعیت</th>
                                        <th style={{width: '50px'}}></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#B53A46'}}>sell limit</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>1.500</td>
                                        <td>570</td>
                                        <td>114</td>
                                        <td style={{color: '#349477'}}>Open</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#B53A46'}}>sell limit</td>
                                        <td>ETH/BTC</td>
                                        <td>0.300000000</td>
                                        <td>0.0000</td>
                                        <td>123.12323</td>
                                        <td>36.424244</td>
                                        <td style={{color: '#349477'}}>Open</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#349477'}}>buy market</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>123</td>
                                        <td>12</td>
                                        <td style={{color: '#349477'}}>Open</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </Tab>
                        <Tab eventKey="all" title="بسته">
                            <div style={{background: '#1E2841'}} className='px-3'>
                                <Table variant="dark" borderless>
                                    <thead>
                                    <tr>
                                        <th>تاریخ</th>
                                        <th>نوع سفارش</th>
                                        <th>جفت</th>
                                        <th>قیمت</th>
                                        <th>Executed</th>
                                        <th>باقی مانده</th>
                                        <th>هزینه باقیمانده</th>
                                        <th>وضعیت</th>
                                        <th style={{width: '50px'}}></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#B53A46'}}>sell limit</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>1.500</td>
                                        <td>570</td>
                                        <td>114</td>
                                        <td style={{color: '#B53A46'}}>Close</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#B53A46'}}>sell limit</td>
                                        <td>ETH/BTC</td>
                                        <td>0.300000000</td>
                                        <td>0.0000</td>
                                        <td>123.12323</td>
                                        <td>36.424244</td>
                                        <td style={{color: '#B53A46'}}>Close</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#349477'}}>buy market</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>123</td>
                                        <td>12</td>
                                        <td style={{color: '#B53A46'}}>Close</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#349477'}}>buy market</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>123</td>
                                        <td>12</td>
                                        <td style={{color: '#B53A46'}}>Close</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    <tr>
                                        <td>2021-03-01</td>
                                        <td style={{color: '#349477'}}>buy market</td>
                                        <td></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>123</td>
                                        <td>12</td>
                                        <td style={{color: '#B53A46'}}>Close</td>
                                        <td><i className='fal fa-times'> </i></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <TabPane as='div' onEntered={CancelAll} eventKey="CancelAll" title="لغو همه">
                        </TabPane>
                    </Tabs>
                    <div className='paginate-orderOpen d-flex justify-content-end'>
                        <div className='mr-3 py-3 d-flex'>
                            <div className='mr-5 d-flex'>
                                <span className='mr-1'>1</span> - <span className='ml-1'>4</span>
                            </div>
                            <span className='mr-5 d-flex align-items-center'><i className='fal fa-angle-left'></i></span>
                            <span className='d-flex align-items-center'><i className='fal fa-angle-right'></i></span>
                        </div>


                    </div>
                </Col>
            </Container>

        </>
    );
};

export default OrderOpen;