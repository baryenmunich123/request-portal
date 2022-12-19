import React from 'react'
import "./RequestForm.css"
import Button from '@mui/material/Button';

function RequestForm({ formValue }) {
  return (
    <form>
      <h1 style={{ paddingLeft: '30px' }}>Form Name: Xác nhận hoãn nghĩa vụ quân sự</h1>
      {/* <div className='requestForm-container'>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Ngày lập yêu cầu</p>
          <input type="date" className="requestForm-input" />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Loại yêu cầu</p>
          <select name="typeReq" id="typeReq" className="requestForm-input">
            <option value="PDF">PDF</option>
            <option value="Paper">Paper</option>
          </select>
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Tên sinh viên</p>
          <input
            type="text"
            className="requestForm-input"
            disabled
            placeholder='Nguyễn Thanh Phong' />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Mã số sinh viên</p>
          <input
            type="text"
            className="requestForm-input"
            disabled
            placeholder='ITITIU19040' />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Ngày sinh</p>
          <input
            type="text"
            className="requestForm-input"
            disabled
            placeholder='18/09/2001' />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Năm nhập học</p>
          <input type="date" className="requestForm-input" />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Năm kết thúc (dự kiến)</p>
          <input type="date" className="requestForm-input" />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Thời gian đào tạo tối đa</p>
          <input type="date" className="requestForm-input" />
        </div>
      </div> */}
      <div className="requestForm-container">
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Ngày lập yêu cầu</p>
          <input type="date" className="requestForm-input" />
        </div>
        <div className="requestForm-input-wrapper">
          <p className="requestForm-input-info">Loại yêu cầu</p>
          <select name="typeReq" id="typeReq" className="requestForm-input">
            <option value="PDF">PDF</option>
            <option value="Paper">Paper</option>
          </select>
        </div>
        {formValue.map(item => {
          return item.type == 'text' || item.type == 'date' ?
            <div className="requestForm-input-wrapper">
              <p className="requestForm-input-info">{item.inputName}</p>
              <input
                type={item.type}
                disabled={item.isDisabled}
                className="requestForm-input"
                placeholder={item.inputValue} />
            </div> :
            <div className="requestForm-input-wrapper">
              <p className="requestForm-input-info">{item.inputName}</p>
              <select name={item.selectName} id={item.selectName} className="requestForm-input">
                {item.selectValue.map((value) =>
                  <option value={value}>{value}</option>)}
              </select>
            </div>
        }
        )}
      </div >
      <div className="requestForm-btn-container">
        <Button variant="outlined">Cancel</Button>
        <Button variant="outlined">Submit</Button>
      </div>
    </form >
  )
}

export default RequestForm