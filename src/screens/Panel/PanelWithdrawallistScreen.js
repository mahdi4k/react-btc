import React from 'react';
import {Container, Table} from "react-bootstrap";
import DataTable, {createTheme} from "react-data-table-component";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelWithdrawallistScreen = () => {

    const columns = [
        {
            name: 'وضعیت',
            selector: 'CurrentFee',
            sortable: true,
            center: true,
        },
        {
            name: 'پرشده',
            selector: 'CurrentFee',
            sortable: true,
            center: true,
        },
        {
            name: 'کارمزد فعلی',
            selector: 'CurrentFee',
            sortable: true,
            center: true,
        },
        {
            name: 'مبلغ کل',
            selector: 'totalPrice',
            sortable: true,
            center: true,
        },
        {
            name: 'مقدار',
            selector: 'total',
            sortable: true,
            center: true,
        },
        {
            name: 'میانگین قیمت تمام شده',
            selector: 'AverageCostPrice',
            sortable: true,
            center: true
        },
        {
            name: 'قیمت سفارش',
            selector: 'OrderPrice',
            sortable: true,
            center: true
        },
        {
            name: 'سمت',
            selector: 'side',
            sortable: true,
            center: true
        },
        {
            name: 'نوغ',
            selector: 'kind',
            sortable: true,
            center: true
        },
        {
            name: 'بازاز',
            selector: 'bazar',
            sortable: true,
            center: true
        },
        {
            name: 'زمان',
            selector: 'date',
            sortable: true,
            center: true,
        },
    ];
    createTheme('solarized', {
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        background: {
            default: '#343A40',
        },
        context: {
            background: '#cb4b16',
            text: '#d7d7d7',
        },
        divider: {
            default: '#454d55',
        },
        action: {
            button: '#d7d7d7',
            hover: '#d7d7d7',
        },
        sortFocus: {
            default: '#ffd7d7'
        },
        button: {
            default: '#ffffff',
            disabled: '#b4b4b4',
        }

    });
    const data = [
        {
            date: 1,
            bazar: 1,
            kind: 'ویندوز 10',
            side: '1399/02/03\t',
            OrderPrice: 'مرورگر کروم',
            AverageCostPrice: '250.364.239.254',
            total: 'تهران',
            totalPrice: 'تایید شده',
            CurrentFee: 'تایید شده',
            stuffed: 'تایید شده',
            Condition: 'تایید شده'
        },

    ];

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity  reffrals my-4 py-3 '>
                <h4 className='text-right my-4 text-white'>لیست برداشت ها</h4>

                <div className='mt-4'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>تاریخچه معاملات
                        </p>
                    </div>
                    <DataTable
                        pagination={false}
                        noHeader={true}
                        columns={columns}
                        data={data}
                        theme="solarized"
                    />
                </div>

                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>لیست واریزی ها</p>
                    </div>
                    <DataTable
                        pagination={false}
                        noHeader={true}
                        columns={columns}
                        data={data}
                        theme="solarized"
                    />
                </div>

                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center bg-header  mt-4 px-3 py-3'>

                        <div className='header-top-currency-list'>
                            <i onClick={removeSection} className='fal fa-times'></i>
                            <i onClick={makeFullWith} className='fal fa-expand'></i>
                            <i className='fal fa-redo'></i>
                            <i onClick={slideEffect} className='fal fa-angle-down'></i>
                        </div>

                        <p>لیست برداشتی ها</p>
                    </div>
                    <DataTable
                        pagination={false}
                        noHeader={true}
                        columns={columns}
                        data={data}
                        theme="solarized"
                    />
                </div>
            </Container>
        </>
    );
};

export default PanelWithdrawallistScreen;