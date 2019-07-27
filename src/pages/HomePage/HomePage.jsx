import React, { Component } from 'react';
import Modal from '../../common/components/Modal/Modal';
import FormThemNguoiDung from '../../common/components/QuanLyNguoiDung/FormThemNguoiDung';
import Modal2 from '../../common/components/Modal/Modal2';

// 1 Cach the hien cua HOC
const ModalThemNguoiDung = Modal(FormThemNguoiDung);

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <button data-toggle='modal' data-target='#modelId'>Them Nguoi Dung</button>
                {/* <ModalThemNguoiDung/> */}

                <Modal2  title='Them Nguoi Dung' Component={FormThemNguoiDung} />
            </div>
        )
    }
}
