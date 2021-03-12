import React from 'react';
import {Container, Table} from "react-bootstrap";
import '../../panel.scss'

const PanelDigitalCurrenciesScreen = () => {
    return (
        <>
            <Container className='bg-secondary homePanel my-4 py-3 '>
                <h3 className='text-right my-3'>ارزهای دیجیتال</h3>
                <div className='digital-page-group-buttons'>
                    <button className='btn'>همه</button>
                    <button className='btn'>مارکت BNB</button>
                    <button className='btn'>مارکت BTC</button>
                    <button className='btn'>مارکت ALTS</button>
                    <button className='btn'>مارکت FIAT</button>
                    <button className='btn'>ETF</button>
                    <button className='btn'>SUPPORT MARGIN</button>
                </div>
                <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i className='fal fa-times'></i>
                        <i className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i className='fal fa-angle-down'></i>
                    </div>

                    <p>مارکت ارزهای دیجیتال </p>
                </div>
                <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                    <thead>
                    <tr>
                        <th>ویرایش</th>
                        <th>وضعیت</th>
                        <th>حداکثر قیمت</th>
                        <th>حجم معامله</th>
                        <th>حداقل قیمت</th>
                        <th>تغییرات قیمت</th>
                        <th>نام ارزها</th>
                        <th>نماد</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className='digital-page-group-buttons'>

                            <button className='btn'>ویرایش</button>
                        </td>

                        <td>8.7...421</td>
                        <td>8.7...421</td>
                        <td>12,000,000</td>
                        <td>8,700,421</td>
                        <td>20.50%  </td>
                        <td>BitCoin</td>
                        <td><i className="cf cf-btc text-warning"></i></td>
                    </tr>

                    <tr>

                        <td className='digital-page-group-buttons'>
                            <button className='btn'>ویرایش</button>
                        </td>

                        <td>8.7...421</td>
                        <td>8.7...421</td>
                        <td>12,000,000</td>
                        <td>8,700,421</td>
                        <td>20.50%  </td>
                        <td>Ethereum</td>
                        <td><i className="cf cf-eth text-primary"></i></td>
                    </tr>

                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default PanelDigitalCurrenciesScreen;