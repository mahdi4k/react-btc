import React from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

const data = [
    {
        id: 1,
        row: 1,
        system: 'ویندوز 10',
        date: '1399/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'تهران',
        status: 'تایید شده'
    },
    {
        id: 2,
        row: 2,
        system: 'ویندوز 8',
        date: '1398/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'اصفهان',
        status: 'تایید نشده'
    },
    {
        id: 3,
        row: 3,
        system: 'ویندوز 8',
        date: '1398/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'اصفهان',
        status: 'تایید نشده'
    },
    {
        id: 4,
        row: 4,
        system: 'ویندوز 8',
        date: '1398/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'اصفهان',
        status: 'تایید نشده'
    },
    {
        id: 5,
        row: 5,
        system: 'ویندوز 8',
        date: '1398/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'اصفهان',
        status: 'تایید نشده'
    },
    {
        id: 6,
        row: 6,
        system: 'ویندوز 8',
        date: '1398/02/03\t',
        source: 'مرورگر کروم',
        ip: '250.364.239.254',
        city: 'اصفهان',
        status: 'تایید نشده'
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


const columns = [

    {
        name: 'وضعیت',
        selector: 'status',
        sortable: true,
        center: true,
        cell: row => <span>{row.status === 'تایید شده' ?
            <p className='border border-success p-1 rounded text-success'>تایید شده</p> :
            <p className='border border-secondary p-1 rounded '>تایید نشده</p>} </span>,

    },
    {
        name: 'شهر',
        selector: 'city',
        sortable: true,
        center: true
    },
    {
        name: 'آی پی',
        selector: 'ip',
        sortable: true,
        center: true
    },
    {
        name: 'منبع',
        selector: 'source',
        sortable: true,
        center: true
    },
    {
        name: 'سیستم',
        selector: 'system',
        sortable: true,
        center: true
    },
    {
        name: 'تاریخ',
        selector: 'date',
        sortable: true,
        center: true
    },
    {
        name: 'ردیف',
        selector: 'row',
        sortable: true,
        center: true,
    },
];
const tableData = {
    columns,
    data
};

const PanelDataTable = () => {
    return (
        <>
            <DataTableExtensions filterPlaceholder={'جست و جو'} export={false} print={false} {...tableData}>
                <DataTable
                    pagination={true}
                    noHeader={true}
                    columns={columns}
                    data={data}
                    theme="solarized"
                />
            </DataTableExtensions>
        </>
    );
};

export default PanelDataTable;