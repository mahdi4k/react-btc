import React from 'react';
import {Container, Table} from "react-bootstrap";
import '../../panel.scss'
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelWalletScreen = () => {

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity homePanel my-4 py-3 '>
                <h3 className='text-right my-3'>آدرس کیف پول های من</h3>

                <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i onClick={removeSection} className='fal fa-times'></i>
                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                    </div>

                    <p>لیست کیف های پول</p>
                </div>
                <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>موجودی</th>
                        <th>نام ارزها</th>
                        <th>نماد</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td className='digital-page-group-buttons'>

                            <button className='btn'>بروزرسانی</button>
                        </td>
                        <td className='digital-page-group-buttons'>

                            <button className='btn'>واریز</button>
                        </td>
                        <td className='digital-page-group-buttons'>

                            <button className='btn'>برداشت</button>
                        </td>

                        <td>700,421</td>
                        <td>BitCoin</td>
                        <td><i className="cf cf-btc text-warning"></i></td>
                    </tr>

                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default PanelWalletScreen;