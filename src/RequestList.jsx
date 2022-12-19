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
        id: 'note',
        label: 'Note',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'pdfFile',
        label: 'PDF File',
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
        note: 'NA',
        pdfFile: 'https://iuoss.com/wp-content/uploads/2022/10/Ho-va-ten-MSSV-XNQS.docx'
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },{
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        note: 'NA',
        pdfFile: 'https://iuoss.com/wp-content/uploads/2022/10/Ho-va-ten-MSSV-XNQS.docx'
    },{
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },{
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'PDF',
        note: 'NA',
        pdfFile: 'https://iuoss.com/wp-content/uploads/2022/10/Ho-va-ten-MSSV-XNQS.docx'
    },{
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
    {
        id: 1,
        requestName: 'Xác nhận hoãn nghĩa vụ quân sự',
        status: 'Waiting',
        type: 'Paper',
        note: 'NA',
        pdfFile: ''
    },
];
function RequestList() {
    return (
        <>
            <Header />
            <Sidebar />
            <TableList rows = {rows} columns = {columns} name = 'Request List'/>
            <Footer />
        </>
    );
}
export default RequestList