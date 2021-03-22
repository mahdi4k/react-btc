import React from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

const data = [
    {
        ID: 1,
        Depositor: 'سعید جعفری',
        symbol: 'cf cf-btc text-warning',
        currencyName: 'BitCoin',
        total: 'مقدار',
        totalPrice: '12,000,000',
        DateOfHarvest: 'BTC',
        changes: '20.50%',
        changesIcon: 'fal fa-angle-up',
        status: 'تایید شده'
    },
    {
        ID: 2,
        Depositor: 'سعید جعفری',
        symbol: 'cf cf-btc text-warning',
        currencyName: 'BitCoin',
        total: 'مقدار',
        totalPrice: '12,000,000',
        DateOfHarvest: 'BTC',
        changes: '15.50%',
        changesIcon: 'fal fa-angle-up',
        status: 'تایید نشده'
    },
    {
        ID: 3,
        Depositor: 'سعید جعفری',
        symbol: 'cf cf-btc text-warning',
        currencyName: 'BitCoin',
        total: 'مقدار',
        totalPrice: '12,000,000',
        DateOfHarvest: 'BTC',
        changes: '18.50%',
        changesIcon: 'fal fa-angle-down',
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
        name: 'تغییرات % (24H)',
        selector: 'changes',
        sortable: true,
        center: true,
        cell: row => <span>{row.changes}<i className={row.changesIcon}> </i></span>
    },
    {
        name: 'تاریخ برداشت',
        selector: 'DateOfHarvest',
        sortable: true,
        center: true
    },
    {
        name: 'مبلغ کل',
        selector: 'totalPrice',
        sortable: true,
        center: true
    },
    {
        name: 'مقدار',
        selector: 'total',
        sortable: true,
        center: true
    },
    {
        name: 'نام ارز',
        selector: 'currencyName',
        sortable: true,
        center: true
    },
    {
        name: 'نماد',
        selector: 'symbol',
        sortable: true,
        center: true,
        cell: row => <span><i className={row.symbol}> </i></span>
    },


    {
        name: 'واریزکننده',
        selector: 'Depositor',
        sortable: true,
        center: true
    },
    {
        name: 'شناسه',
        selector: 'ID',
        sortable: true,
        center: true,
    },
];
const tableData = {
    columns,
    data
};

const PanelDepositListTable = () => {
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

export default PanelDepositListTable;