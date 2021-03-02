import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

const HomeScreen = () => {
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
                    <Col className='mt-3' md={5}>
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

                    <Col md={7}>

                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default HomeScreen;