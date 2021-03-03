import React, {useState} from 'react';
import {Container, Row, Col, Image, Tab, Table, TabPane, Tabs} from "react-bootstrap";

const HomeScreen = () => {
    const [key, setKey] = useState('deposit')
    return (
        <>
            <div className='estimatedValue mt-3 w-100'>
                <Container>

                     <span className='d-flex align-items-center flex-wrap'>
                         <h6>Estimated Value</h6> <p>1.100.9</p> <span
                         className='badge-Currency'>USD</span> <p>0.00000000000</p>
                         <span className='badge-Currency'>ETH</span>

                     </span>

                </Container>
            </div>
            <Container>
                <Row>
                    <Col className='mt-3 pr-0' md={5}>
                        <div className='d-flex justify-content-around align-items-center currency-left py-3 active'>
                            <Image src="/images/Bitcoin-Cash-BCH-icon.png"/>
                            <span className='BTC-title'>
                                    <h4>BCH</h4>
                                    <p className='BTC-title mt-1'>Bitcoin Cash</p>
                            </span>

                            <span className='text-right font-sm'>
                                    <h4>10.1111111 BCH</h4>
                                    <span><i className="fas fa-lock"></i> 0.07933333333</span>
                            </span>
                        </div>
                        <div className='d-flex justify-content-around align-items-center currency-left py-3  '>
                            <Image src="/images/Bitcoin-BTC-icon.png"/>
                            <span className='BTC-title'>
                                    <h4>BTC</h4>
                                    <p className='BTC-title mt-1'>Bitcoin</p>
                            </span>

                            <span className='text-right font-sm'>
                                    <h4>10.1111111 BCH</h4>
                                    <span><i className="fas fa-lock"></i> 0.07933333333</span>
                            </span>
                        </div>
                    </Col>

                    <Col className='mt-3 pl-0' md={7}>
                        <Tabs
                            className='controlled-tab-BTC orderOpenNav'
                            id="controlled-tab"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="deposit" title="سپرده">
                                <div style={{background: '#1E2841'}} className='px-3'>

                                    <div className='d-flex px-3  currency-right py-3 flex-column '>

                                        <div
                                            className='d-flex w-100 justify-content-between header-description align-items-center'>
                                            <div className='d-flex  header-description-left'>
                                                <Image src="/images/Bitcoin-Cash-BCH-icon.png"/>
                                                <span className='BTC-title ml-3'>
                                             <h4>locked</h4>
                                             <p className=' mt-1'>0.073123545</p>
                                            </span>
                                            </div>
                                            <div className='header-description-right'>
                                                <h4>BCH Balance</h4>
                                                <p>10.11977453</p>
                                            </div>
                                        </div>

                                        <div className='BTC-Quoted col-12 col-md-7 p-0 mt-4'>
                                            <p>Submit a desposit using the following address or Qr code . lorem lorem
                                                lorem lorem lorem lorem lorem lorem lorem lorem </p>
                                        </div>

                                        <div>

                                            <div className="input-group mb-3 currency-input-section">
                                                <input value='ایجاد آدرس سپرده' className="form-control"/>

                                                <div className="input-group-append">
                                                    <span className="input-group-text">کپی</span>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='depositHistory'>
                                            
                                        </div>
                                    </div>

                                </div>

                            </Tab>
                            <Tab eventKey="withdraw" title="withdraw">
                                <div style={{background: '#1E2841'}} className='px-3'>

                                </div>
                            </Tab>


                        </Tabs>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default HomeScreen;