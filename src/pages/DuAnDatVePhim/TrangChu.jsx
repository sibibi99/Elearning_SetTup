import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import {NavLink} from 'react-router-dom';

function TrangChu(props) {

  // let [DanhSachPhim, SetDanhSachPhim] = useState([]);
  useEffect(() => {
    console.log(props);
    
    props.layDanhSachPhim();
  }, []) // []: chi chay  1 lan, khong chay de quy

  return (
    <div className='container'>
      <div className="row my-4">

      {props.DanhSachPhim.map((phim, index) => {
        return <div  key={index} className="card col-md-4 ">
          <img className="card-img-top" src={phim.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <NavLink to= {`/chi-tiet-phim/${phim.maPhim}`} className="btn btn-success">Chi Tiet</NavLink>
          </div>
        </div>

})}
</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    DanhSachPhim: state.danhSachPhimReducer.DanhSachPhim
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    layDanhSachPhim: () => {
      dispatch(layDanhSachPhimAction());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TrangChu)