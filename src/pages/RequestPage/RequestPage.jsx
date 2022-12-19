import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer/Footer'
import Sidebar from '../../Sidebar/Sidebar'

import RequestForm from '../../components/RequestForm/RequestForm'

import "./RequestPage.css"

function RequestPage() {

  const formValue = [
    { type: 'text', isDisabled: true, inputName: 'Tên sinh viên', inputValue: 'Nguyễn Thanh Phong', selectName: '', selectValue: [] },
    { type: 'text', isDisabled: true, inputName: 'Mã số sinh viên', inputValue: 'ITITIU19040', selectName: '', selectValue: [] },
    { type: 'text', isDisabled: true, inputName: 'Ngày sinh', selectName: '', inputValue: '18/09/2001', selectValue: [] },
    { type: 'date', isDisabled: false, inputName: 'Năm nhập học', selectName: '', selectValue: [] },
    { type: 'date', isDisabled: false, inputName: 'Năm kết thúc (dự kiến)', selectName: '', selectValue: [] },
    { type: 'date', isDisabled: false, inputName: 'Thời gian đào tạo tối đa', selectName: '', selectValue: [] },
    { type: 'select', isDisabled: false, inputName: 'Test', selectName: 'test', selectValue: [1, 2, 3] },
  ]

  return (
    <>
      <Header />
      <Sidebar />
      <div className="requestPage-container">
        <RequestForm formValue={formValue} />
      </div>
      <Footer />
    </>
  )
}

export default RequestPage