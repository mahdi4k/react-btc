import React from 'react';
import {Container, Table} from "react-bootstrap";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelNotificationScreen = () => {

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity homePanel my-4 py-3 '>
                <h3 className='text-right my-3'>اعلانات</h3>

                <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i onClick={removeSection} className='fal fa-times'></i>
                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                    </div>

                    <p>لیست اعلانهای سایت</p>
                </div>
                <Table responsive variant="dark overflow-hidden header-top-currency-list-table">
                    <thead>
                    <tr>
                        <th>پیام</th>
                        <th>زمان</th>
                        <th>#</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>#</td>
                        <td>13:45</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>#</td>
                        <td>13:45</td>
                        <td></td>
                    </tr>

                    <tr>

                        <td>#</td>
                        <td>13:45</td>
                        <td></td>
                    </tr>

                    <tr>

                        <td>#</td>
                        <td>13:45</td>
                        <td></td>
                    </tr>

                    <tr>

                        <td>#</td>
                        <td>13:45</td>
                        <td></td>
                    </tr>

                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default PanelNotificationScreen;