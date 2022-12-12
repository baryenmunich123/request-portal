import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

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
];
function RequestList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Header />
            <Sidebar />
            <Paper sx={{ width: '1660px', overflow: 'hidden', margin: '68px 260px 0' }}>
                <h1>Request's List</h1>
                <TableContainer sx={{ minHeight: 440, minHeight: 440, marginTop: 10 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {console.log(row.type)}
                                                        {column.id == 'pdfFile' && row.type == 'PDF'
                                                            ? <a href={value} download><input type="button" value="Download" /></a>
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Footer />
        </>
    );
}
export default RequestList