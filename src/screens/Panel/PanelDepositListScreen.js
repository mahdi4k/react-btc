import React from 'react';
import Container from "react-bootstrap/Container";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'
import PanelDepositListTable from "../../components/PanelDepositListTable";
const PanelDepositListScreen = () => {

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity Activity my-4 py-3 '>
                <h4 className='text-right my-4 text-white'>لیست واریز ها</h4>
                <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i onClick={removeSection} className='fal fa-times'></i>
                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                    </div>

                    <p>لیست تذاکنش های واریز ارزهای دیجیتال</p>

                </div>
                <PanelDepositListTable/>
            </Container>
        </>
    );
};

export default PanelDepositListScreen;