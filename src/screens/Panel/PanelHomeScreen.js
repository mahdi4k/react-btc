import React from 'react';
import '../../panel.scss'
import {Col, Container, Table, Row} from "react-bootstrap";
import {Chart} from 'react-charts'

const PanelHomeScreen = () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2]]
            }
        ],
        []
    )
    const series = React.useMemo(
        () => ({
            type: 'area'
        }),
        []
    )
    const axes = React.useMemo(
        () => [
            {primary: true, position: 'bottom', type: 'time'},
            {position: 'left', type: 'linear', stacked: true}
        ],
        []
    )
    const lineChart = (

        <div
            style={{
                width: '150px',
                height: '70px'
            }}
        >
            <Chart data={data} series={series} axes={axes} tooltip/>
        </div>
    )
    return (
        <Container className='bg-secondary homePanel mt-4 pt-3'>
            <h3 className='text-right my-3'>پنل کاربری</h3>
            <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                <div className='header-top-currency-list'>
                    <i className='fal fa-times'></i>
                    <i className='fal fa-expand'></i>
                    <i className='fal fa-redo'></i>
                    <i className='fal fa-angle-down'></i>
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

                    <td style={{width: '50px', height: "50px"}}>
                        {lineChart}
                    </td>


                    <td>8.7...421</td>
                    <td>12,000,000</td>
                    <td>8,700,421</td>
                    <td>20.50% <i className='fal fa-angle-up'></i></td>
                    <td>BitCoin</td>
                    <td><i className="cf cf-btc text-warning"></i></td>
                </tr>

                <tr>

                    <td style={{width: '50px', height: "50px"}}>
                        {lineChart}
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
            <Row>
                <Col md={6}>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>
                        <h3 className='text-right my-3'>کیف پول من</h3>
                        <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                            <div className='header-top-currency-list'>
                                <i className='fal fa-times'></i>
                                <i className='fal fa-expand'></i>
                                <i className='fal fa-redo'></i>
                                <i className='fal fa-angle-down'></i>
                            </div>

                            <p>لیست ارزهای دیجیتال </p>
                        </div>
                    </div>
                    <div>
                        <p>مقئار موجودی</p>
                        <h3>
                            <span>پیشنهاد های خرید :</span>
                            <span>11.5003000</span>
                            <span>(BTC)</span>
                        </h3>

                        <h3>
                            <span>پیشنهاد های فروش :</span>
                            <span>11.5003000</span>
                            <span>(ETH)</span>
                        </h3>

                        
                    </div>
                </Col>
                <Col md={6}>

                </Col>
            </Row>


        </Container>

    );
};

export default PanelHomeScreen;