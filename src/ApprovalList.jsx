import * as React from 'react';

import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import TableList from './components/TableList/TableList';

const columns = [
    { 
        id: 'id', 
        label: 'ID', 
        minWidth: 170, 
        align: 'center' 
    },
    { 
        id: 'requestName', 
        label: 'Request Name', 
        minWidth: 100, 
        align: 'center' 
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'requestor',
        label: 'Requestor',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
    }
];

const rows = [
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },{
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        requestor: 'ITITIU19040',
        action: ''
    }
];

function ApprovalList() {
    return (
        <div>
            <Header />
            <Sidebar />
            <TableList rows = {rows} columns = {columns} name = 'Approval List'/>
            <Footer />
        </div>
    );
}

export default ApprovalList