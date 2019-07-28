import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'; // Viet HOC thu gon
import { layChiTietPhim } from '../../redux/actions/QuanLyPhimAction';
// import {withRouter} from 'react-router-dom';


function TrangChiTiet(props) {

  useEffect(() => {
    //Lay param tu url
    let { maPhim } = props.match.params;
    props.LayChiTietPhim(maPhim);
   
    
    
  }, [])

  let { chiTietPhim } = props;
  console.log(props);
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <img src={chiTietPhim.hinhAnh} className='mt-5' alt="" />
        </div>
        <div className="col-md-8">
          <div className="mt-5">
            <span className='display-4'>{chiTietPhim.tenPhim}</span> <br/>
            <span>{chiTietPhim.moTa}</span>
            <p>Ngay Khoi Chieu: {chiTietPhim.ngayKhoiChieu}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chiTietPhim: state.danhSachPhimReducer.chiTietPhim
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LayChiTietPhim: (maPhim) => {
      dispatch(layChiTietPhim(maPhim));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangChiTiet)