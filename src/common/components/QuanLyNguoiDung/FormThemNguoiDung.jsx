import React from 'react'

export default function FormThemNguoiDung() {
  return (
    <div className='container'>
      <form>
        <div className="form-group">
          <span>Tai Khoan</span>
          <input name='taiKhoan' className='form-control' />
        </div>
        <div className="form-group">
          <span>Mat Khau</span>
          <input name='matKhau' className='form-control' />
        </div>
        <div className="form-group">
          <button className='btn btn-success'>Them Nguoi Dung</button>
        </div>
      </form>
    </div>
  )
}
